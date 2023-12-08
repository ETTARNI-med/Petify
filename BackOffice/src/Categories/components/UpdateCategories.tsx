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
import ImageViewer from "./ImageViewer";
import { Switch } from "@/components/ui/switch";

interface Props {
  Categories: {
    _id: string;
    category_name: string;
    category_image: string;
    active: boolean;
  };
  onUpdate: (variable: boolean) => void;
}
export default function UpdateCategories({ Categories, onUpdate }: Props) {
  const [checkedValue, setCheckedValue] = useState(Categories.active);
  const [path, setPath] = useState(Categories.category_image);
  const [category, setCategory] = useState({
    category_name: Categories.category_name,
    category_image: Categories.category_image,
    active: Categories.active,
  });
  const handleCategoryChange = (target: string, value: string) => {
    setCategory((prevValue) => {
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
    setCategory((prevValue) => {
      return {
        ...prevValue,
        category_image: path,
      };
    });
  }, [path, category.category_image]);

  // Handle Active status
  const handleActiveChange = () => {
    setCheckedValue(!checkedValue);
  };

  useEffect(() => {
    setCategory((prevValue) => {
      return {
        ...prevValue,
        active: checkedValue,
      };
    });
  }, [category.active, checkedValue]);

  //handle Submit event
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:4000/v1/categories/" + Categories._id, category)
      .then((r) => {
        console.log(r);
        onUpdate(true);
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
            <DialogTitle>Update Category</DialogTitle>
            <DialogDescription>
              Update Category in a easy way. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-3 py-4">
            <div className="grid xsm:grid-cols-4 items-center gap-4">
              <Label htmlFor="category_name" className="xsm:text-right pl-2">
                <span className="text-red-700">*</span>
                Product Name
              </Label>
              <Input
                value={category.category_name}
                onChange={(e) =>
                  handleCategoryChange("category_name", e.target.value)
                }
                id="category_name"
                name="category_name"
                placeholder="dog"
                className="col-span-3"
                autoComplete="off"
              />
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
                />
                <ImageViewer path={path} />
              </div>
            </div>
            <div className="grid xsm:grid-cols-4 items-start gap-4">
              <Label htmlFor="active">Active</Label>
              <Switch
                id="active"
                checked={checkedValue}
                onClick={handleActiveChange}
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose id="dialogClose"></DialogClose>
            <Button type="submit">Update category</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
