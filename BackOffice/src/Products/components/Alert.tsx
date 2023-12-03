import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { Payment } from "..";
import { Row } from "@tanstack/react-table";

interface Props {
  selected: Row<Payment>[];
  rows: number;
}

export default function Alert({ rows, selected }: Props) {
  const handleDelete = () => {
    if (selected.length === 1) {
      const id = selected[0].original._id;
      axios.delete(`http://localhost:4000/v1/products/${id}`).catch((error) => {
        console.error("Error deleting record:", error);
      });
    } else {
      selected.forEach((item) => {
        const id = item.original._id;
        axios
          .delete(`http://localhost:4000/v1/products/${id}`)
          .catch((error) => {
            console.error(`Error deleting record with ID ${id}:`, error);
          });
      });
    }
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Remove</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          {rows > 1 ? (
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete all the{" "}
              {rows} Products and remove there data from our servers.
            </AlertDialogDescription>
          ) : (
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete this
              Product and remove his data from our servers.
            </AlertDialogDescription>
          )}
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
