import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface Props {
  path: string[];
}

export default function ImageSlider({ path }: Props) {
  const [image, setImage] = useState(0);

  const handleClick = (side: number) => {
    side === 0
      ? image === 0
        ? setImage(path.length - 1)
        : setImage(image - 1)
      : setImage((image + 1) % path.length);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <img src={path[0]} className="w-20 cursor-pointer" />
      </DialogTrigger>
      {path.length !== 1 ? (
        <DialogContent className="w-auto">
          <div className="flex justify-center items-center relative">
            <ChevronLeft
              className="absolute -left-6 cursor-pointer"
              onClick={() => handleClick(0)}
            />
            <img
              src={path[image]}
              alt="Image Not Found"
              className="w-[30vw] object-cover"
            />
            <ChevronRight
              className="absolute -right-6 cursor-pointer"
              onClick={() => handleClick(1)}
            />
          </div>
        </DialogContent>
      ) : (
        <img
          src={path[0]}
          alt="Image Not Found"
          className="w-[30vw] object-cover"
        />
      )}
    </Dialog>
  );
}
