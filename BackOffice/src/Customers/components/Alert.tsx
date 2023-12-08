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
  id: string | string[];
  rows?: number;
  onUpdate: (variable: boolean) => void;
}

export default function Alert({ rows, id, onUpdate }: Props) {
  const handleDelete = () => {
    if (typeof id === "string") {
      axios
        .delete(`http://localhost:4000/v1/customers/${id}`)
        .then(() => {
          console.error("done");
          onUpdate(true);
        })
        .catch((error) => {
          console.error("Error deleting record:", error);
        });
    } else {
      id.forEach((item) => {
        axios
          .delete(`http://localhost:4000/v1/customers/${item}`)
          .catch((error) => {
            console.error(`Error deleting record with ID ${item}:`, error);
          })
          .finally(() => {
            onUpdate(true);
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
          {typeof id !== "string" ? (
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete all the{" "}
              {rows} Products and remove there data from our servers.
            </AlertDialogDescription>
          ) : (
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete this
              Customer and remove his data from our servers.
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
