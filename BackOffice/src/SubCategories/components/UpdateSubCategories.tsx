import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
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
import { useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Category } from "@/Categories";
import ImageViewer from "./ImageViewer";

interface Props {
  SubCategory: {
    _id: string;
    subcategory_name: string;
    subcategory_image: string;
    category_id: string;
    active: boolean;
  };
  onUpdate: (variable: boolean) => void;
}
export default function UpdateCategories({ SubCategory, onUpdate }: Props) {
  const [path, setPath] = useState(SubCategory.subcategory_image);
  const [checkedValue, setCheckedValue] = useState(SubCategory.active);
  const [category, setCategory] = useState<string>(SubCategory.category_id);
  const [categoryName, setCategoryName] = useState<string>(
    SubCategory.category_id
  );
  const [subCategory, setSubCategory] = useState({
    subcategory_name: SubCategory.subcategory_name,
    subcategory_image: SubCategory.subcategory_image,
    category_id: SubCategory.category_id,
    active: SubCategory.active,
  });
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/v1/categories/")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  }, []);

  useEffect(() => {
    const selectedCategory = categories.find((cat) => cat._id === category);
    if (selectedCategory) {
      setCategoryName(selectedCategory.category_name);
    }
  }, [category, categories]);

  useEffect(() => {
    const selectedCategory = categories.find(
      (cat) => cat.category_name === categoryName
    );
    if (selectedCategory) {
      setCategory(selectedCategory._id);
    }
  }, [categoryName, categories]);

  const handleSubCategoryChange = (target: string, value: string) => {
    setSubCategory((prevValue) => {
      return {
        ...prevValue,
        [target]: value,
      };
    });
  };

  //image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
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
            setPath(uploadedPath);
          })
          .catch((e) => {
            console.log(e);
          });
      };
    }
  };

  // Handle paths updates
  useEffect(() => {
    setSubCategory((prevValue) => {
      return {
        ...prevValue,
        subcategory_image: path,
      };
    });
  }, [path, subCategory.subcategory_image]);

  // Handle Active status
  const handleCategoryChange = (value: string) => {
    setCategory(value);
  };

  useEffect(() => {
    setSubCategory((prevValue) => {
      return {
        ...prevValue,
        category_id: category,
      };
    });
  }, [subCategory.category_id, category]);

  // Handle Active status
  const handleActiveChange = () => {
    setCheckedValue(!checkedValue);
  };

  useEffect(() => {
    setSubCategory((prevValue) => {
      return {
        ...prevValue,
        active: checkedValue,
      };
    });
  }, [subCategory.active, checkedValue]);

  //handle Submit event
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSubCategory((prevValue) => {
      return {
        ...prevValue,
        category_id: category,
      };
    });
    console.log(subCategory);

    axios
      .put(
        "http://localhost:4000/v1/subcategories/" + SubCategory._id,
        subCategory
      )
      .then((r) => {
        onUpdate(true);
        console.log(subCategory);
        console.log(r);
        const dialogCloseElement = document.getElementById("dialogClose");
        if (dialogCloseElement) {
          dialogCloseElement.click();
        }
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
            <DialogTitle>Update Subcategory</DialogTitle>
            <DialogDescription>
              Update Subcategory in a easy way. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-3 py-4">
            <div className="grid xsm:grid-cols-4 items-center gap-4">
              <Label htmlFor="subcategory_name" className="xsm:text-right pl-2">
                <span className="text-red-700">*</span>
                Subcategory Name
              </Label>
              <Input
                value={subCategory.subcategory_name}
                onChange={(e) =>
                  handleSubCategoryChange("subcategory_name", e.target.value)
                }
                id="subcategory_name"
                name="subcategory_name"
                placeholder="wet food"
                className="col-span-3"
                autoComplete="off"
              />
            </div>
            <div className="grid grid-row-2 xsm:grid-cols-4   items-center gap-4">
              <Label htmlFor="category" className="xsm:text-right pl-2">
                <span className="text-red-700">*</span>
                Category
              </Label>
              <Select
                defaultValue={subCategory.category_id}
                value={categoryName}
                onValueChange={handleCategoryChange}
              >
                <SelectTrigger
                  id="category"
                  className="ml-auto min-w-fit col-span-3"
                >
                  <SelectValue>{categoryName}</SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem value={category._id} key={category._id}>
                      {category.category_name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid xsm:grid-cols-4 items-start gap-4">
              <Label
                htmlFor="subcategory_image"
                className="xsm:text-right pl-2"
              >
                <span className="text-red-700">*</span>
                Image
              </Label>
              <div className="flex justify-between items-center col-span-3">
                <input
                  onChange={(e) => handleImageUpload(e)}
                  name="subcategory_image"
                  id="subcategory_image"
                  type="file"
                  accept="image/*"
                  className="w-11/12"
                />
                <ImageViewer path={path} />
              </div>
            </div>
            <div className="grid xsm:grid-cols-4 items-start gap-4">
              <Label htmlFor="active" className="xsm:text-right pl-2">
                Active
              </Label>
              <Switch
                id="active"
                checked={checkedValue}
                onClick={handleActiveChange}
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose id="dialogClose"></DialogClose>
            <Button type="submit">Update Subcategory</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
