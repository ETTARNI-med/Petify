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

interface Props {
  selected: string | string[];
  rows?: number;
  onUpdate: (variable: boolean) => void;
}

export default function Alert({ rows, selected, onUpdate }: Props) {
  const handleDelete = () => {
    if (typeof selected === "string") {
      axios
        .delete(`http://localhost:4000/v1/categories/${selected}`)
        .then(() => {
          onUpdate(true);
        })
        .catch((error) => {
          console.error("Error deleting record:", error);
        });
    } else {
      selected.forEach((id) => {
        axios
          .delete(`http://localhost:4000/v1/categories/${id}`)
          .catch((error) => {
            console.error(`Error deleting record with ID ${id}:`, error);
          });
      });
      onUpdate(true);
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
          {typeof rows !== "undefined" ? (
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
