import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface Props {
  path: string;
}

export default function ImageSlider({ path }: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <img src={path} className="w-16 cursor-pointer" />
      </DialogTrigger>
      <DialogContent className="w-auto">
        <img
          src={path}
          alt="Image Not Found"
          className="w-[30vw] object-cover"
        />
      </DialogContent>
    </Dialog>
  );
}
