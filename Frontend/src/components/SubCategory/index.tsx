import { useEffect, useState } from "react";
import FilterSlider from "./FilterSlider";
import Products from "./Products";
import Check from "./Check";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import axios from "axios";
import { useParams } from "react-router-dom";

//creating a filter type
export type Filter = {
  colors: string[];
  ages: string[];
  price: number[];
};

export type Product = {
  _id: string;
  sku: string;
  price: string;
  discount_price: string;
  active: boolean;
  subcategory_id: string;
  product_name: string;
  product_image: string[];
  options: string[];
  short_description: string;
  long_description: string;
};

export type SubCategory = {
  _id: string;
  subcategory_name: string;
  subcategory_image: string;
  category_id: string;
  active: boolean;
};

export type Category = {
  _id: string;
  category_name: string;
  category_image: string;
  active: boolean;
};

const SubCategory = () => {
  const { categoryId, subCategoryId } = useParams();
  const [data, setData] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [subcategories, setSubcategories] = useState<SubCategory[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [allColors, setAllColors] = useState<string[]>([]);
  const [allAges, setAllAges] = useState<string[]>([]);
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(2000);

  const getData = async () => {
    try {
      // await new Promise((resolve) => setTimeout(resolve, 5000));
      const responseData = await axios.get(
        "http://localhost:4000/v1/products/"
      );
      setData(responseData.data);
      const responseCategories = await axios.get(
        "http://127.0.0.1:4000/v1/categories/"
      );
      setCategories(responseCategories.data);
      const responseSubCategories = await axios.get(
        "http://127.0.0.1:4000/v1/subcategories/"
      );
      setSubcategories(responseSubCategories.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    // filtring the product list of needed subcategory
    const products = data.filter(
      (product) => product.subcategory_id === subCategoryId
    );
    setProducts(products);

    // Get all existing colors
    const allColors = Array.from(
      new Set(
        products.flatMap((product) => {
          const options = product.options || [];
          return options
            .filter((option) => option.startsWith("color :"))
            .map((option) => option.split(":")[1].trim());
        })
      )
    );
    setAllColors(allColors);

    // Get all existing ages
    const allAges = Array.from(
      new Set(
        products.flatMap((product) => {
          const options = product.options || [];
          return options
            .filter((option) => option.startsWith("age :"))
            .map((option) => option.split(":")[1].trim());
        })
      )
    );
    setAllAges(allAges);

    // Get the minimum and maximum price
    const prices = products.map((product) => product.discount_price);
    const numericPrices: number[] = prices.map(Number);
    const minPrice = Math.floor(Math.min(...numericPrices));
    const maxPrice = Math.ceil(Math.max(...numericPrices));
    setMaxPrice(maxPrice);
    setMinPrice(minPrice);
  }, [data, subCategoryId]);

  //creating a filter variable
  const [filter, setFilter] = useState<Filter>({
    colors: allColors,
    ages: allAges,
    price: [minPrice, maxPrice],
  });

  //creating a variable that have price range
  const [values, setValues] = useState<[number, number]>([minPrice, maxPrice]);
  //creating a variable that count how much a color is repeated
  const [colorsCount, setColorsCount] = useState<{ [key: string]: number }>({});
  //creating a variable that count how much an age value's is repeated
  const [ageCount, setAgeCount] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    setFilter({
      colors: allColors,
      ages: allAges,
      price: [minPrice, maxPrice],
    });
    setValues([minPrice, maxPrice]);
  }, [minPrice, maxPrice, allAges, allColors]);

  useEffect(() => {
    //counting how much a color is repeated
    const calculateColorsCount = () => {
      const counts: { [key: string]: number } = {};

      products.forEach((product) => {
        const colorOption = product.options.find((option) =>
          option.startsWith("Color: ")
        );

        if (colorOption) {
          const color = colorOption.split("Color: ")[1];

          if (counts[color]) {
            counts[color] += 1;
          } else {
            counts[color] = 1;
          }
        }
      });

      setColorsCount(counts);
    };

    //counting how much an age is repeated
    const calculateAgeCount = () => {
      const counts: { [key: string]: number } = {};

      products.forEach((product) => {
        const ageOption = product.options.find((option) =>
          option.startsWith("Age: ")
        );

        if (ageOption) {
          const age = ageOption.split("Age: ")[1];

          if (counts[age]) {
            counts[age] += 1;
          } else {
            counts[age] = 1;
          }
        }
      });

      setAgeCount(counts);
    };

    calculateColorsCount();
    calculateAgeCount();
  }, [products]);

  // Define handleColorChange function
  const handleColorChange = (color: string, checked: boolean) => {
    if (checked) {
      setFilter((prevFilter) => ({
        ...prevFilter,
        colors: [...prevFilter.colors, color],
      }));
    } else {
      setFilter((prevFilter) => ({
        ...prevFilter,
        colors: prevFilter.colors.filter((c) => c !== color),
      }));
    }
  };

  // Define handleAgeChange function
  const handleAgeChange = (age: string, checked: boolean) => {
    if (checked) {
      setFilter((prevFilter) => ({
        ...prevFilter,
        ages: [...prevFilter.ages, age],
      }));
    } else {
      setFilter((prevFilter) => ({
        ...prevFilter,
        ages: prevFilter.ages.filter((a) => a !== age),
      }));
    }
  };

  //handling slider values change that happend by users
  const handleSliderChange = (price: [number, number]) => {
    setValues(price);
    setFilter((prevFilter) => ({
      ...prevFilter,
      price,
    }));
  };

  return (
    <>
      {/* BreadCrumb and title for less than sm scrs */}
      <div className="ml-4">
        <div className="w-3/4 sm:hidden flex justify-between">
          <span>Home</span>&gt;
          <span>
            {categories.map((category) =>
              category._id === categoryId ? category.category_name : null
            )}
          </span>
          &gt;
          <span>
            {subcategories.map((subcategory) =>
              subcategory._id === subCategoryId
                ? subcategory.subcategory_name
                : null
            )}
          </span>
        </div>
        <div className="w-full flex sm:hidden justify-center text-3xl my-4 uppercase">
          <span>
            {subcategories.map((subcategory) =>
              subcategory._id === subCategoryId
                ? subcategory.subcategory_name
                : null
            )}
          </span>
        </div>
      </div>
      <div className="ml-4 flex flex-col sm:flex-row gap-4">
        {/* Filter */}
        {/* Age */}
        <Accordion
          type="multiple"
          className="flex justify-evenly w-full sm:justify-start sm:flex-col sm:w-[10vw] gap-4 sm:sticky sm:top-4 sm:h-[80vh]"
        >
          <AccordionItem value="age" className="space-y-4 w-1/5 xs:w-full">
            <AccordionTrigger className="uppercase">Age</AccordionTrigger>
            <AccordionContent>
              {allAges.map((age) => (
                <div className="flex py-2 items-center space-x-2" key={age}>
                  <Check
                    id={age}
                    defaultChecked={filter.ages.includes(age)}
                    onChange={(checked) => handleAgeChange(age, checked)}
                  />
                  <label
                    htmlFor={age}
                    className="flex pl-10  items-center justify-between w-full text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    <span>{age}</span> <span>{ageCount[age]}</span>
                  </label>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
          {/* Color */}
          <AccordionItem value="color" className="space-y-4 w-1/5 xs:w-full">
            <AccordionTrigger className="uppercase">Color</AccordionTrigger>
            <AccordionContent>
              {allColors.map((color) => (
                <div className="flex py-2 items-center space-x-2" key={color}>
                  <Check
                    id={color}
                    defaultChecked={filter.colors.includes(color)}
                    onChange={(checked) => handleColorChange(color, checked)}
                  />
                  <label
                    htmlFor={color}
                    className="pl-10 flex items-center justify-between w-20 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    <span>
                      <input type="color" value={color} readOnly disabled />
                    </span>{" "}
                    <span>{colorsCount[color]}</span>
                  </label>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
          {/* Price */}
          <div className="space-y-4 w-1/5 xs:w-full">
            <span className="uppercase text-wrap-none text-sm lg:text-base">
              Price <span className="muted">(MAD)</span>
            </span>
            <FilterSlider
              min={minPrice}
              step={Math.floor(maxPrice / 10)}
              max={maxPrice}
              initialValue={[minPrice, maxPrice]}
              onChange={handleSliderChange}
            />
            <span className="flex justify-between items-center">
              <span>{values[0]}</span> - <span>{values[1]}</span>
            </span>
          </div>
        </Accordion>
        {/* Products */}
        <Products
          ProductList={products}
          Filter={filter}
          Category={categories
            .filter((category) => category._id === categoryId)
            .map((category) => category.category_name)
            .join(", ")}
          SubCategory={subcategories
            .filter((subcategory) => subcategory._id === subCategoryId)
            .map((subcategory) => subcategory.subcategory_name)
            .join(", ")}
        />
      </div>
    </>
  );
};

export default SubCategory;
