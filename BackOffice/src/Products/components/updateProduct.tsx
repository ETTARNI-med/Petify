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
interface Props {
  Payment: {
    id?: string;
    sku: string;
    price: number;
    discount_price: number;
    active: boolean;
    subcategory_id: string;
    product_name: string;
    short_description: string;
  };
}

export default function UpdateProduct({ Payment }: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          Product <PenSquare className="ml-2 h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Update New Product</DialogTitle>
          <DialogDescription>
            Update Product in a easy way. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-row-2 xsm:grid-cols-4    items-center gap-4">
            <Label htmlFor="product_name" className="xsm:text-right pl-2">
              Product Name
            </Label>
            <Input
              id="product_name"
              value={Payment.product_name}
              placeholder="crock"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-row-2 xsm:grid-cols-4    items-center gap-4">
            <Label htmlFor="sku" className="xsm:text-right pl-2">
              SKU
            </Label>
            <Input
              id="sku"
              value={Payment.sku}
              placeholder="102903"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-row-2 xsm:grid-cols-4    items-center gap-4">
            <Label htmlFor="price" className="xsm:text-right pl-2">
              Price
            </Label>
            <Input
              id="price"
              value={Payment.price}
              placeholder="27.99"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-row-2 xsm:grid-cols-4    items-center gap-4">
            <Label htmlFor="discount_price" className="xsm:text-right pl-2">
              Discount Price
            </Label>
            <Input
              id="discount_price"
              value={Payment.discount_price}
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
              value={Payment.subcategory_id}
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
              value={Payment.short_description}
              placeholder="instruction, information..."
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Update Product</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
