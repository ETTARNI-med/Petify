import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";
import axios from "axios";
import { useEffect, useState } from "react";
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
  onUpdate: (variable: boolean) => void;
}

export default function AddCategories({ onUpdate }: Props) {
  const [path, setPath] = useState("");
  const [subCategory, setSubCategory] = useState({
    subcategory_name: "",
    subcategory_image: "",
    category_id: "",
    active: true,
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

  //reset product into initial status
  const resetSubCategory = () => {
    setPath("");
    setSubCategory({
      subcategory_name: "",
      subcategory_image: "",
      category_id: "",
      active: true,
    });
    const dialogCloseElement = document.getElementById("dialogClose");
    if (dialogCloseElement) {
      dialogCloseElement.click();
    }
  };

  //handle Submit event
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/v1/subcategories/", subCategory)
      .then((r) => {
        console.log(r);
        onUpdate(true);
        resetSubCategory();
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          SubCategory <Plus className="ml-2 h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:w-[50vw] lg:w-[40vw]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Add New SubCategory</DialogTitle>
          </DialogHeader>
          <div className="grid gap-8 py-8">
            <div className="grid xsm:grid-cols-4 items-center gap-4">
              <Label htmlFor="category_name" className="xsm:text-right pl-2">
                <span className="text-red-700">*</span>
                SubCategory Name
              </Label>
              <Input
                value={subCategory.subcategory_name}
                onChange={(e) =>
                  handleSubCategoryChange("subcategory_name", e.target.value)
                }
                id="subcategory_name"
                name="subcategory_name"
                placeholder="dry food"
                className="col-span-3"
                autoComplete="off"
              />
            </div>
            <div className="grid grid-row-2 xsm:grid-cols-4   items-center gap-4">
              <Label htmlFor="category_id" className="xsm:text-right pl-2">
                <span className="text-red-700">*</span>
                Category
              </Label>
              <Select
                required
                value={subCategory.category_id}
                onValueChange={(value) =>
                  handleSubCategoryChange("category_id", value)
                }
              >
                <SelectTrigger
                  id="category_id"
                  className="ml-auto min-w-fit col-span-3"
                >
                  <SelectValue placeholder="Select" />
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
              <Label htmlFor="category_image" className="xsm:text-right pl-2">
                <span className="text-red-700">*</span>
                Image
              </Label>
              <div className="flex justify-between items-center col-span-3">
                <input
                  onChange={(e) => handleImageUpload(e)}
                  name="category_image"
                  id="category_image"
                  type="file"
                  accept="image/*"
                  className="w-11/12"
                  required
                />
                <ImageViewer path={path} />
              </div>
            </div>
          </div>
          <DialogFooter>
            <DialogClose id="dialogClose"></DialogClose>
            <Button type="submit">Add SubCategory</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
