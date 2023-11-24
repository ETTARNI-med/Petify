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
import { Plus } from "lucide-react";

export default function AddCustomer() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          Customer <Plus className="ml-2 h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Customer</DialogTitle>
          <DialogDescription>
            Add Customer in a easy way. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-row-2 xsm:grid-cols-4    items-center gap-4">
            <Label htmlFor="first_name" className="xsm:text-right pl-2">
              First Name
            </Label>
            <Input id="first_name" placeholder="John" className="col-span-3" />
          </div>
          <div className="grid grid-row-2 xsm:grid-cols-4    items-center gap-4">
            <Label htmlFor="last_name" className="xsm:text-right pl-2">
              Last Name
            </Label>
            <Input id="last_name" placeholder="Doe" className="col-span-3" />
          </div>
          <div className="grid grid-row-2 xsm:grid-cols-4    items-center gap-4">
            <Label htmlFor="email" className="xsm:text-right pl-2">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="johndoe@gmail.com"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-row-2 xsm:grid-cols-4    items-center gap-4">
            <Label htmlFor="password" className="xsm:text-right pl-2">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="********"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Add User</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
