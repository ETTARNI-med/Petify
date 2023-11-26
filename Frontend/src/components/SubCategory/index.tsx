import { useEffect, useState } from "react";
import FilterSlider from "./FilterSlider";
import Products from "./Products";
import Defaultproduct from "@/assets/Defaultproduct.png";
import Check from "./Check";

// List of products
const fullProductList = [
  {
    sku: "CAT001",
    product_image: Defaultproduct,
    product_name: "Premium Cat Food",
    subcategory_id: "SC001",
    short_description: "Healthy cat food",
    long_description: "Premium cat food made from natural ingredients.",
    price: 39.99,
    discount_price: 38.99,
    options: ["Flavor: Chicken", "Size: 1kg", "Age: +3y", "Color: Black"],
    active: true,
  },
  {
    sku: "CAT002",
    product_image: Defaultproduct,
    product_name: "Interactive Cat Toy",
    subcategory_id: "SC001",
    short_description: "Interactive cat toy",
    long_description: "Keep your cat entertained with this interactive toy.",
    price: 35.99,
    discount_price: 34.99,
    options: ["Color: Blue", "Age: 1 - 2y"],
    active: true,
  },
  {
    sku: "CAT003",
    product_image: Defaultproduct,
    product_name: "Cat Scratching Post",
    subcategory_id: "SC001",
    short_description: "Durable cat scratching post",
    long_description:
      "Provide your cat with a sturdy and durable scratching post.",
    price: 119.99,
    discount_price: 116.99,
    options: ["Color: Beige", "Age: 2 - 3y"],
    active: true,
  },
  {
    sku: "CAT004",
    product_image: Defaultproduct,
    product_name: "Catnip Toy Set",
    subcategory_id: "SC002",
    short_description: "Set of catnip-infused toys",
    long_description:
      "A set of cat toys filled with premium catnip for extra excitement.",
    price: 17.99,
    discount_price: 16.49,
    options: ["Quantity: 3 toys", "Color: Black", "Age: 1 - 2y"],
    active: true,
  },
  {
    sku: "CAT005",
    product_image: Defaultproduct,
    product_name: "Cat Litter Box",
    subcategory_id: "SC004",
    short_description: "Easy-to-clean cat litter box",
    long_description:
      "A spacious litter box designed for easy cleaning and odor control.",
    price: 129.99,
    discount_price: 124.99,
    options: ["Color: Gray", "Age: 1 - 2y"],
    active: true,
  },
  {
    sku: "CAT006",
    product_image: Defaultproduct,
    product_name: "Cat Collar with Bell",
    subcategory_id: "SC001",
    short_description: "Stylish cat collar with a bell",
    long_description:
      "A fashionable cat collar with an attached bell for added safety.",
    price: 16.99,
    discount_price: 15.99,
    options: ["Color: Pink", "Age: 1 - 2y"],
    active: true,
  },
  {
    sku: "CAT007",
    product_image: Defaultproduct,
    product_name: "Cat Bed",
    subcategory_id: "SC001",
    short_description: "Cozy cat bed for naps",
    long_description:
      "Provide your cat with a comfortable and cozy bed for relaxing naps.",
    price: 119.99,
    discount_price: 117.99,
    options: ["Size: Small", "Color: Gray", "Age: 0 - 1y"],
    active: true,
  },
  {
    sku: "CAT008",
    product_image: Defaultproduct,
    product_name: "Cat Treats Variety Pack",
    subcategory_id: "SC001",
    short_description: "Assorted cat treats",
    long_description: "A variety pack of delicious treats to reward your cat.",
    price: 212.99,
    discount_price: 210.99,
    options: ["Pack Size: 5 treats", "Color: Black", "Age: 0 - 1y"],
    active: true,
  },
  {
    sku: "CAT009",
    product_image: Defaultproduct,
    product_name: "Cat Water Fountain",
    subcategory_id: "SC007",
    short_description: "Automatic water fountain for cats",
    long_description:
      "Keep your cat hydrated with a continuous flow of fresh water.",
    price: 234.99,
    discount_price: 229.99,
    options: ["Color: White", "Size: 1kg", "Age: +3y"],
    active: true,
  },
  {
    sku: "CAT010",
    product_image: Defaultproduct,
    product_name: "Cat Grooming Brush",
    subcategory_id: "SC008",
    short_description: "Gentle cat grooming brush",
    long_description:
      "A soft and gentle brush for keeping your cat's coat clean and healthy.",
    price: 138.99,
    discount_price: 127.49,
    options: ["Color: Blue", "Size: 1kg", "Age: +3y"],
    active: true,
  },
];
// filtring the product list of needed subcategory
const ProductList = fullProductList.filter(
  (product) => product.subcategory_id === "SC001"
);

// Get all existing colors
const allColors = Array.from(
  new Set(
    ProductList.flatMap((product) => {
      const options = product.options || [];
      return options
        .filter((option) => option.startsWith("Color:"))
        .map((option) => option.split(":")[1].trim());
    })
  )
);

// Get all existing ages
const allAges = Array.from(
  new Set(
    ProductList.flatMap((product) => {
      const options = product.options || [];
      return options
        .filter((option) => option.startsWith("Age:"))
        .map((option) => option.split(":")[1].trim());
    })
  )
);

// Get the minimum and maximum price
console.log(ProductList);
const prices = ProductList.map((product) => product.discount_price);
const minPrice = Math.floor(Math.min(...prices));
const maxPrice = Math.ceil(Math.max(...prices));

//creating a filter type
type Filter = {
  colors: string[];
  ages: string[];
  price: number[];
};

const SubCategory = () => {
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
    //counting how much a color is repeated
    const calculateColorsCount = () => {
      const counts: { [key: string]: number } = {};

      ProductList.forEach((product) => {
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

      ProductList.forEach((product) => {
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
  }, []);

  //handling age change that happend by users
  const handleAgeChange = (age: string, checked: boolean) => {
    if (checked) {
      setFilter((prevFilter) => ({
        ...prevFilter,
        ages: [...prevFilter.ages, age],
      }));
    } else {
      setFilter((prevFilter) => ({
        ...prevFilter,
        ages: prevFilter.ages.filter((selectedAge) => selectedAge !== age),
      }));
    }
  };

  //handling color change that happend by users
  const handleColorChange = (color: string, checked: boolean) => {
    if (checked) {
      setFilter((prevFilter) => ({
        ...prevFilter,
        colors: [...prevFilter.colors, color],
      }));
    } else {
      setFilter((prevFilter) => ({
        ...prevFilter,
        colors: prevFilter.colors.filter(
          (selectedColor) => selectedColor !== color
        ),
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
    <div className="ml-4 flex gap-4">
      {/* Filter */}
      {/* Age */}
      <div className="flex flex-col w-[10vw] gap-4 sticky top-4 h-[80vh]">
        <div className="space-y-4">
          <span className="uppercase">Age</span>
          {Object.entries(ageCount).map(([age, count]) => (
            <div className="flex items-center space-x-2" key={age}>
              <Check
                id={age}
                defaultChecked={filter.ages.includes(age)}
                onChange={(checked) => handleAgeChange(age, checked)}
              />
              <label
                htmlFor={age}
                className="flex items-center justify-between w-full text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                <span>{age}</span> <span>{count}</span>
              </label>
            </div>
          ))}
        </div>
        {/* Color */}
        <div className="flex flex-col w-[10vw] gap-4">
          <div className="space-y-4">
            <span className="uppercase">Color</span>
            {Object.entries(colorsCount).map(([color, count]) => (
              <div className="flex items-center space-x-2" key={color}>
                <Check
                  id={color}
                  defaultChecked={filter.colors.includes(color)}
                  onChange={(checked) => handleColorChange(color, checked)}
                />
                <label
                  htmlFor={color}
                  className="flex items-center justify-between w-full text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  <span>{color}</span> <span>{count}</span>
                </label>
              </div>
            ))}
          </div>
          {/* Price */}
          <div className="space-y-4">
            <span className="uppercase">
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
        </div>
      </div>
      {/* Products */}
      <Products ProductList={ProductList} Filter={filter} />
    </div>
  );
};

export default SubCategory;
