import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Eye } from "lucide-react";

interface Props {
  path: string;
}

export default function ImageViewer({ path }: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {path === "" ? (
          <Eye size={24} className="text-red-700" />
        ) : (
          <Eye size={24} className="text-green-700 cursor-pointer" />
        )}
      </DialogTrigger>
      {path !== "" ? (
        <DialogContent className="w-auto flex justify-center items-center">
          <img
            src={path}
            alt="Image Not Found"
            className="w-[30vw] object-cover"
          />
        </DialogContent>
      ) : (
        <></>
      )}
    </Dialog>
  );
}
