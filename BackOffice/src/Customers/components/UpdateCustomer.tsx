import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
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
import ImageViewer from "@/Products/components/ImageViewer";
import { Switch } from "@/components/ui/switch";

interface Props {
  Customer: {
    id: string;
    username: string;
    first_name: string;
    last_name: string;
    customer_image: string;
    email: string;
    valid_account: boolean;
  };
  onUpdate: (variable: boolean) => void;
}
export default function UpdateCustomer({ Customer, onUpdate }: Props) {
  const [valid_account, setValid_account] = useState(Customer.valid_account);
  const [path, setPath] = useState(Customer.customer_image);
  const [customer, setCustomer] = useState({
    email: Customer.email,
    username: Customer.username,
    first_name: Customer.first_name,
    last_name: Customer.last_name,
    customer_image: Customer.customer_image,
    valid_account: Customer.valid_account,
    password: "",
  });

  //handle User Change
  const handleUserChange = (target: string, value: string) => {
    if (target === "password") {
      setCustomer((prevValue) => {
        return {
          ...prevValue,
          [target]: value.trim(),
        };
      });
    } else {
      setCustomer((prevValue) => {
        return {
          ...prevValue,
          [target]: value,
        };
      });
    }
  };

  // Handle Active status
  const handleActiveChange = () => {
    setValid_account(!valid_account);
  };

  useEffect(() => {
    setCustomer((prevValue) => {
      return {
        ...prevValue,
        valid_account,
      };
    });
  }, [customer.valid_account, valid_account]);

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
    setCustomer((prevValue) => {
      return {
        ...prevValue,
        customer_image: path,
      };
    });
  }, [path]);

  //handle Submit event
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    customer.first_name.trim();
    customer.last_name.trim();
    customer.username.trim();
    customer.email.trim();
    axios
      .put("http://localhost:4000/v1/customers/" + Customer.id, customer)
      .then((r) => {
        console.log(r);
        onUpdate(true);
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
                className="col-span-3"
                required
                value={customer.first_name}
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
                className="col-span-3"
                required
                value={customer.last_name}
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
                className="col-span-3"
                required
                value={customer.username}
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
                className="col-span-3"
                required
                value={customer.email}
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
              <Label htmlFor="valid_account" className="xsm:text-right pl-2">
                <span className="text-red-700">*</span>
                Valid
              </Label>
              <Switch
                id="valid_account"
                checked={valid_account}
                onClick={handleActiveChange}
              />
            </div>
            <div className="grid xsm:grid-cols-4 items-center gap-4">
              <Label htmlFor="password" className="xsm:text-right pl-2">
                <span className="text-red-700">*</span>
                Password
              </Label>
              <Input
                id="password"
                placeholder="@P3t1f7@"
                className="col-span-3"
                required
                value={customer.password}
                onChange={(e) => handleUserChange("password", e.target.value)}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Update User</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
