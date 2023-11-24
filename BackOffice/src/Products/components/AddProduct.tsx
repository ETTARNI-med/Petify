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

export default function AddProduct() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          Product <Plus className="ml-2 h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Product</DialogTitle>
          <DialogDescription>
            Add Product in a easy way. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-row-2 xsm:grid-cols-4    items-center gap-4">
            <Label htmlFor="product_name" className="xsm:text-right pl-2">
              Product Name
            </Label>
            <Input
              id="product_name"
              placeholder="crock"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-row-2 xsm:grid-cols-4    items-center gap-4">
            <Label htmlFor="sku" className="xsm:text-right pl-2">
              SKU
            </Label>
            <Input id="sku" placeholder="102903" className="col-span-3" />
          </div>
          <div className="grid grid-row-2 xsm:grid-cols-4    items-center gap-4">
            <Label htmlFor="price" className="xsm:text-right pl-2">
              Price
            </Label>
            <Input id="price" placeholder="27.99" className="col-span-3" />
          </div>
          <div className="grid grid-row-2 xsm:grid-cols-4    items-center gap-4">
            <Label htmlFor="discount_price" className="xsm:text-right pl-2">
              Discount Price
            </Label>
            <Input
              id="discount_price"
              placeholder="26.99"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-row-2 xsm:grid-cols-4    items-center gap-4">
            <Label htmlFor="subcategory_id" className="xsm:text-right pl-2">
              Subcategory
            </Label>
            <Input
              id="subcategory_id"
              placeholder="food"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-row-2 xsm:grid-cols-4    items-center gap-4">
            <Label htmlFor="short_description" className="xsm:text-right pl-2">
              Short Description
            </Label>
            <Input
              id="short_description"
              placeholder="instruction, information..."
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Add Product</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
