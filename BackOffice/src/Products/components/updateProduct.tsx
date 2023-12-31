import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PenSquare } from "lucide-react";
import axios from "axios";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import ImageViewer from "./ImageViewer";
import { Switch } from "@/components/ui/switch";
import { SubCategory } from "@/SubCategories";
import { Category } from "@/Categories";
// import { Cloudinary } from "@cloudinary/url-gen";
interface Props {
  Product: {
    id: string;
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
  onVariable: (variable: boolean) => void;
}
export default function UpdateProduct({ Product, onVariable }: Props) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [subCategories, setSubCategories] = useState<SubCategory[]>([]);
  const [chosenSubCategory, setChosenSubCategory] = useState("");
  const [checkedValue, setCheckedValue] = useState(Product.active);
  const [paths, setPaths] = useState<string[]>(Product.product_image);
  const [product, setProduct] = useState({
    product_name: Product.product_name,
    discount_price: Product.discount_price,
    subcategory_id: Product.subcategory_id,
    short_description: Product.short_description,
    long_description: Product.long_description,
    product_image: Product.product_image,
    active: Product.active,
    price: Product.price,
    sku: Product.sku,
    options: Product.options,
  });
  const handleProductChange = (target: string, value: string) => {
    setProduct((prevValue) => {
      return {
        ...prevValue,
        [target]: value,
      };
    });
  };

  const getData = async () => {
    const responseSubCategories = await axios.get(
      "http://localhost:4000/v1/subcategories/"
    );
    setSubCategories(responseSubCategories.data);
    const responseCategories = await axios.get(
      "http://localhost:4000/v1/categories/"
    );
    setCategories(responseCategories.data);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const subcategory = subCategories.find(
      (subcategory) => subcategory._id === product.subcategory_id
    );
    if (subcategory) {
      setChosenSubCategory(subcategory.subcategory_name);
    } else {
      setChosenSubCategory("");
    }
  }, [product.subcategory_id, subCategories]);

  const handleProductOptionsChange = (target: string, value: string) => {
    setProduct((prevValue) => {
      const updatedOptions = prevValue.options.map((option) => {
        if (option.startsWith(`${target} :`)) {
          return `${target} : ${value}`;
        }
        return option;
      });
      return {
        ...prevValue,
        options: updatedOptions,
      };
    });
  };
  // tracking color value
  const colorOption = product.options.find((option) =>
    option.startsWith("color : ")
  );
  const colorValue = colorOption && colorOption.split("color : ")[1];
  // tracking size value
  const sizeOption = product.options.find((option) =>
    option.startsWith("size : ")
  );
  const sizeValue = sizeOption && sizeOption.split("size : ")[1];
  // tracking age value
  const ageOption = product.options.find((option) =>
    option.startsWith("age : ")
  );
  const ageValue = ageOption && ageOption.split("age : ")[1];

  //image upload
  const handleImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "y6yqsq0d");
        axios
          .post(
            "https://api.cloudinary.com/v1_1/defnf0hzt/image/upload",
            formData
          )
          .then((r) => {
            console.log(r);
            const uploadedPath = `https://res.cloudinary.com/defnf0hzt/image/upload/f_auto,q_auto/${r.data.public_id}`;
            setPaths((prevPaths) => {
              const updatedPaths = [...prevPaths];
              updatedPaths[index] = uploadedPath;
              return updatedPaths;
            });
          })
          .catch((e) => {
            console.log(e);
          });
      };
    }
  };

  // Handle paths updates
  useEffect(() => {
    setProduct((prevValue) => {
      return {
        ...prevValue,
        product_image: paths,
      };
    });
  }, [paths]);

  // Handle Active status
  const handleActiveChange = () => {
    setCheckedValue(!checkedValue);
  };

  useEffect(() => {
    setProduct((prevValue) => {
      return {
        ...prevValue,
        active: checkedValue,
      };
    });
  }, [product.active, checkedValue]);

  //handle Submit event
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .patch("http://localhost:4000/v1/products/" + Product.id, product)
      .then((r) => {
        console.log(r);
        onVariable(true);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          Update <PenSquare className="ml-2 h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:w-[80vw] lg:w-[50vw]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Add New Product</DialogTitle>
            <DialogDescription>
              Add Product in a easy way. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-3 py-4">
            <div className="grid xsm:grid-cols-4 items-center gap-4">
              <Label htmlFor="product_name" className="xsm:text-right pl-2">
                <span className="text-red-700">*</span>
                Product Name
              </Label>
              <Input
                value={product.product_name}
                onChange={(e) =>
                  handleProductChange("product_name", e.target.value)
                }
                id="product_name"
                name="product_name"
                placeholder="crock"
                className="col-span-3"
                autoComplete="off"
              />
            </div>
            <div className="grid xsm:grid-cols-4    items-center gap-4">
              <Label htmlFor="sku" className="xsm:text-right pl-2">
                <span className="text-red-700">*</span>
                SKU
              </Label>
              <Input
                value={product.sku}
                onChange={(e) => handleProductChange("sku", e.target.value)}
                id="sku"
                name="sku"
                placeholder="102903"
                className="col-span-3"
                autoComplete="off"
              />
            </div>
            <div className="grid xsm:grid-cols-4    items-center gap-4">
              <Label htmlFor="price" className="xsm:text-right pl-2">
                <span className="text-red-700">*</span>
                Price
              </Label>
              <Input
                value={product.price}
                onChange={(e) => handleProductChange("price", e.target.value)}
                type="number"
                id="price"
                name="price"
                placeholder="27.99"
                className="col-span-3"
                autoComplete="off"
              />
            </div>
            <div className="grid xsm:grid-cols-4    items-center gap-4">
              <Label htmlFor="discount_price" className="xsm:text-right pl-2">
                <span className="text-red-700">*</span>
                Discount Price
              </Label>
              <Input
                value={product.discount_price}
                onChange={(e) =>
                  handleProductChange("discount_price", e.target.value)
                }
                type="number"
                name="discount_price"
                id="discount_price"
                placeholder="26.99"
                className="col-span-3"
                autoComplete="off"
              />
            </div>
            <div className="grid xsm:grid-cols-4    items-center gap-4">
              <Label htmlFor="subcategory_id" className="xsm:text-right pl-2">
                <span className="text-red-700">*</span>
                Subcategory
              </Label>
              <Select
                onValueChange={(value) =>
                  handleProductChange("subcategory_id", value)
                }
                value={product.subcategory_id}
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="product subcategory">
                    {chosenSubCategory}
                  </SelectValue>
                </SelectTrigger>
                <SelectContent className="col-span-3">
                  {categories.map((category) => (
                    <SelectGroup key={category._id}>
                      <SelectLabel>{category.category_name}</SelectLabel>
                      {subCategories
                        .filter(
                          (subcategory) =>
                            subcategory.category_id === category._id
                        )
                        .map((subcategory) => (
                          <SelectItem
                            key={subcategory._id}
                            value={subcategory._id}
                          >
                            {subcategory.subcategory_name}
                          </SelectItem>
                        ))}
                    </SelectGroup>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid xsm:grid-cols-4    items-center gap-4">
              <Label
                htmlFor="short_description"
                className="xsm:text-right pl-2"
              >
                <span className="text-red-700">*</span>
                Short Description
              </Label>
              <Input
                value={product.short_description}
                onChange={(e) =>
                  handleProductChange("short_description", e.target.value)
                }
                name="short_description"
                id="short_description"
                placeholder="instruction, information..."
                className="col-span-3"
                autoComplete="off"
              />
            </div>
            <div className="grid xsm:grid-cols-4    items-center gap-4">
              <Label htmlFor="long_description" className="xsm:text-right pl-2">
                <span className="text-red-700">*</span>
                Long Description
              </Label>
              <Input
                value={product.long_description}
                onChange={(e) =>
                  handleProductChange("long_description", e.target.value)
                }
                name="long_description"
                id="long_description"
                placeholder="instruction, information..."
                className="col-span-3"
                autoComplete="off"
              />
            </div>
            <div className="grid xsm:grid-cols-4 items-start gap-4">
              <Label htmlFor="product_image" className="xsm:text-right pl-2">
                <span className="text-red-700">*</span>
                Image
              </Label>
              <div className="flex justify-between items-center col-span-3">
                <input
                  onChange={(e) => handleImageUpload(e, 0)}
                  name="product_image"
                  id="product_image"
                  type="file"
                  accept="image/*"
                  className="w-11/12"
                />
                <ImageViewer path={paths[0]} />
              </div>
            </div>
            <div className="grid xsm:grid-cols-4 items-start gap-4">
              <div className="flex justify-between items-center col-start-2 col-span-3">
                <input
                  onChange={(e) => handleImageUpload(e, 1)}
                  name="product_image_1"
                  id="product_image_1"
                  type="file"
                  accept="image/*"
                  className="w-11/12"
                />
                <ImageViewer path={paths[1]} />
              </div>
            </div>
            <div className="grid xsm:grid-cols-4 items-start gap-4">
              <div className="flex justify-between items-center col-start-2 col-span-3">
                <input
                  onChange={(e) => handleImageUpload(e, 2)}
                  name="product_image_2"
                  id="product_image_2"
                  type="file"
                  accept="image/*"
                  className="w-11/12"
                />
                <ImageViewer path={paths[2]} />
              </div>
            </div>
            <div className="grid xsm:grid-cols-4 items-start gap-4">
              <Label htmlFor="color" className="xsm:text-right pl-2">
                Color
              </Label>
              <Input
                value={colorValue}
                onChange={(e) =>
                  handleProductOptionsChange("color", e.target.value)
                }
                name="color"
                id="color"
                type="color"
                className="col-span-3"
              />
            </div>
            <div className="grid xsm:grid-cols-4    items-center gap-4">
              <Label htmlFor="size" className="xsm:text-right pl-2">
                Size
              </Label>
              <Select
                value={sizeValue}
                onValueChange={(value) =>
                  handleProductOptionsChange("size", value)
                }
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select Size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="tiny">Tiny (&lt; 0.5Kg)</SelectItem>
                    <SelectItem value="small">Small (&lt; 1Kg)</SelectItem>
                    <SelectItem value="medium">Medium (&lt; 2Kg)</SelectItem>
                    <SelectItem value="large">Large (&gt; 2Kg)</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="grid xsm:grid-cols-4 items-center gap-4">
              <Label htmlFor="age" className="xsm:text-right pl-2">
                Age
              </Label>
              <Select
                value={ageValue}
                onValueChange={(value) =>
                  handleProductOptionsChange("age", value)
                }
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select Age" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="young">Young (&lt; 1 Years)</SelectItem>
                    <SelectItem value="junior">
                      Junior (&lt; 2 Years)
                    </SelectItem>
                    <SelectItem value="adult">Adult (&lt; 3 Years)</SelectItem>
                    <SelectItem value="mature">
                      Mature (&gt; 3 Years)
                    </SelectItem>
                    <SelectItem value="all">All Ages</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter className="ml-auto w-3/4 flex justify-between sm:justify-between">
            <div className="flex items-center space-x-2">
              <Switch
                id="active"
                checked={checkedValue}
                onClick={handleActiveChange}
              />
              <Label htmlFor="active">Active</Label>
            </div>
            <Button type="submit">Update Product</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
