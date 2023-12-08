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
import ImageViewer from "./ImageViewer";

interface Props {
  onUpdate: (variable: boolean) => void;
}

export default function AddCategories({ onUpdate }: Props) {
  const [path, setPath] = useState("");
  const [category, setCategory] = useState({
    category_name: "",
    category_image: "",
    active: true,
  });
  const handleProductChange = (target: string, value: string) => {
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

  //reset product into initial status
  const resetCategory = () => {
    setPath("");
    setCategory({
      category_name: "",
      category_image: "",
      active: true,
    });
    const dialogCloseElement = document.getElementById("dialogClose");
    if (dialogCloseElement) {
      dialogCloseElement.click();
    }
  };

  //handle Submit event
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/v1/categories/", category)
      .then((r) => {
        console.log(r);
        onUpdate(true);
        resetCategory();
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          Category <Plus className="ml-2 h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:w-[50vw] lg:w-[40vw]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Add New Product</DialogTitle>
          </DialogHeader>
          <div className="grid gap-8 py-8">
            <div className="grid xsm:grid-cols-4 items-center gap-4">
              <Label htmlFor="category_name" className="xsm:text-right pl-2">
                <span className="text-red-700">*</span>
                Product Name
              </Label>
              <Input
                value={category.category_name}
                onChange={(e) =>
                  handleProductChange("category_name", e.target.value)
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
                  required
                />
                <ImageViewer path={path} />
              </div>
            </div>
          </div>
          <DialogFooter>
            <DialogClose id="dialogClose"></DialogClose>
            <Button type="submit">Add Product</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
