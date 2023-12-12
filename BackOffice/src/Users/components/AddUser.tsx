import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
import ImageViewer from "@/Products/components/ImageViewer";
import { cn } from "@/lib/utils";
interface Props {
  onUpdate: (variable: boolean) => void;
}
export default function AddUser({ onUpdate }: Props) {
  const [path, setPath] = useState("");
  const [user, setUser] = useState({
    email: "",
    user_name: "",
    role: "",
    first_name: "",
    last_name: "",
    user_image: "",
    password: "",
  });

  const [userErrors, setUserErrors] = useState({
    email: false,
    user_name: false,
    first_name: false,
    last_name: false,
    password: false,
  });

  //handle User Change
  const handleUserChange = (target: string, value: string) => {
    if (target === "password") {
      setUser((prevValue) => {
        return {
          ...prevValue,
          [target]: value.trim(),
        };
      });
    } else {
      setUser((prevValue) => {
        return {
          ...prevValue,
          [target]: value,
        };
      });
    }
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
    setUser((prevValue) => {
      return {
        ...prevValue,
        user_image: path,
      };
    });
  }, [path]);

  //reset user into initial status
  const resetUser = () => {
    setPath("");
    setUser({
      email: "",
      user_name: "",
      role: "",
      first_name: "",
      last_name: "",
      user_image: "",
      password: "",
    });
  };

  //handle User Change
  const handleUserErrors = (target: string, value: boolean) => {
    setUserErrors((prevValue) => {
      return {
        ...prevValue,
        [target]: value,
      };
    });
  };

  //handle Submit event
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    user.first_name.trim();
    user.last_name.trim();
    user.user_name.trim();
    user.email.trim();

    axios
      .post("http://localhost:4000/v1/users/add", user)
      .then((r) => {
        console.log(r);
        onUpdate(true);
        resetUser();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    const { first_name, last_name, email, user_name, password } = user;

    first_name.length > 1 && (first_name.length < 3 || first_name.length > 27)
      ? handleUserErrors("first_name", true)
      : handleUserErrors("first_name", false);

    // Check last name length
    last_name.length > 1 && (last_name.length < 2 || last_name.length > 27)
      ? handleUserErrors("last_name", true)
      : handleUserErrors("last_name", false);

    // Check email length
    email.length > 1 && (email.length < 11 || email.length > 60)
      ? handleUserErrors("email", true)
      : handleUserErrors("email", false);

    // Check user name length
    user_name.length > 1 && (user_name.length < 5 || user_name.length > 27)
      ? handleUserErrors("user_name", true)
      : handleUserErrors("user_name", false);

    // Check password length
    password.length > 1 && password.length < 8
      ? handleUserErrors("password", true)
      : handleUserErrors("password", false);
  }, [user]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          User <Plus className="ml-2 h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:w-[50vw]">
        <form onSubmit={handleSubmit}>
          <DialogHeader className="pb-8">
            <DialogTitle>Add New User</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid xsm:grid-cols-4 items-center gap-4">
              <Label htmlFor="first_name" className="xsm:text-right pl-2">
                <span className="text-red-700">*</span>
                First Name
              </Label>
              <Input
                id="first_name"
                placeholder="John"
                className={cn("col-span-3", {
                  "border-red-700": userErrors.first_name,
                })}
                required
                value={user.first_name}
                onChange={(e) => handleUserChange("first_name", e.target.value)}
              />
            </div>
            <div className="grid xsm:grid-cols-4 items-center gap-4">
              <Label htmlFor="last_name" className="xsm:text-right pl-2">
                <span className="text-red-700">*</span>
                Last Name
              </Label>
              <Input
                id="last_name"
                placeholder="Doe"
                className={cn("col-span-3", {
                  "border-red-700": userErrors.last_name,
                })}
                required
                value={user.last_name}
                onChange={(e) => handleUserChange("last_name", e.target.value)}
              />
            </div>
            <div className="grid xsm:grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="xsm:text-right pl-2">
                <span className="text-red-700">*</span>
                Username
              </Label>
              <Input
                id="username"
                placeholder="Dohn23"
                className={cn("col-span-3", {
                  "border-red-700": userErrors.user_name,
                })}
                required
                value={user.user_name}
                onChange={(e) => handleUserChange("user_name", e.target.value)}
              />
            </div>
            <div className="grid xsm:grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="xsm:text-right pl-2">
                <span className="text-red-700">*</span>
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="johndoe@gmail.com"
                className={cn("col-span-3", {
                  "border-red-700": userErrors.email,
                })}
                required
                value={user.email}
                onChange={(e) => handleUserChange("email", e.target.value)}
              />
            </div>
            <div className="grid xsm:grid-cols-4 items-center gap-4">
              <Label htmlFor="product_image" className="xsm:text-right pl-2">
                <span className="text-red-700">*</span>
                Image
              </Label>
              <div className="flex justify-between items-center col-span-3">
                <input
                  onChange={(e) => handleImageUpload(e)}
                  name="product_image"
                  id="product_image"
                  type="file"
                  accept="image/*"
                  className="w-11/12"
                />
                <ImageViewer path={path} />
              </div>
            </div>
            <div className="grid grid-row-2 xsm:grid-cols-4   items-center gap-4">
              <Label htmlFor="role" className="xsm:text-right pl-2">
                <span className="text-red-700">*</span>
                Role
              </Label>
              <Select
                required
                value={user.role}
                onValueChange={(value) => handleUserChange("role", value)}
              >
                <SelectTrigger
                  id="role"
                  className="ml-auto min-w-fit col-span-3"
                >
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Admin</SelectItem>
                  <SelectItem value="2">Manager</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid xsm:grid-cols-4 items-center gap-4">
              <Label htmlFor="password" className="xsm:text-right pl-2">
                <span className="text-red-700">*</span>
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="@P3t1f7@"
                className={cn("col-span-3", {
                  "border-red-700": userErrors.password,
                })}
                required
                value={user.password}
                onChange={(e) => handleUserChange("password", e.target.value)}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Add User</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
