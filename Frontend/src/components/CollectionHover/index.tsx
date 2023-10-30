import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
// import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import { useState } from "react";
import { LayoutGrid } from "lucide-react";

const CollectionHover = () => {
  const [showMenCategories, setShowMenCategories] = useState(false);
  const [showWomenCategories, setShowWomenCategories] = useState(false);
  const [showBoyCategories, setShowBoyCategories] = useState(false);
  const [showGirlCategories, setShowGirlCategories] = useState(false);
  return (
    <HoverCard>
      <HoverCardTrigger>
        <LayoutGrid size={20} />
      </HoverCardTrigger>
      <HoverCardContent className="w-[80vw] ml-[10vw] h-16 mt-8 flex justify-around items-center">
        <HoverCard>
          <HoverCardTrigger
            className={`uppercase hover:underline ${
              showMenCategories ? "underline" : "no-underline"
            }`}
          >
            men
          </HoverCardTrigger>
          <HoverCardContent
            className="w-[80vw] ml-[10vw] h-12 -mt-2 flex justify-around items-center rounded-t-none border-t-0"
            onMouseEnter={() => setShowMenCategories(true)}
            onMouseLeave={() => setShowMenCategories(false)}
          >
            <span className="uppercase">clothes</span>
            <span className="uppercase">shoes</span>
            <span className="uppercase">accessories</span>
            <span className="uppercase">bags</span>
          </HoverCardContent>
        </HoverCard>
        <HoverCard>
          <HoverCardTrigger
            className={`uppercase hover:underline ${
              showWomenCategories ? "underline" : "no-underline"
            }`}
          >
            women
          </HoverCardTrigger>
          <HoverCardContent
            className="w-[80vw] ml-[10vw] h-12 -mt-2 flex justify-around items-center rounded-t-none border-t-0"
            onMouseEnter={() => setShowWomenCategories(true)}
            onMouseLeave={() => setShowWomenCategories(false)}
          >
            <span className="uppercase">clothes</span>
            <span className="uppercase">shoes</span>
            <span className="uppercase">accessories</span>
            <span className="uppercase">bags</span>
          </HoverCardContent>
        </HoverCard>
        <HoverCard>
          <HoverCardTrigger
            className={`uppercase hover:underline ${
              showBoyCategories ? "underline" : "no-underline"
            }`}
          >
            boy
          </HoverCardTrigger>
          <HoverCardContent
            className="w-[80vw] -ml-[21.5vw] h-12 -mt-2 flex justify-around items-center rounded-t-none border-t-0"
            onMouseEnter={() => setShowBoyCategories(true)}
            onMouseLeave={() => setShowBoyCategories(false)}
          >
            <span className="uppercase">clothes</span>
            <span className="uppercase">shoes</span>
            <span className="uppercase">accessories</span>
          </HoverCardContent>
        </HoverCard>
        <HoverCard>
          <HoverCardTrigger
            className={`uppercase hover:underline ${
              showGirlCategories ? "underline" : "no-underline"
            }`}
          >
            girl
          </HoverCardTrigger>
          <HoverCardContent
            className="w-[80vw] -ml-[60.4vw] h-12 -mt-2 flex justify-around items-center rounded-t-none border-t-0"
            onMouseEnter={() => setShowGirlCategories(true)}
            onMouseLeave={() => setShowGirlCategories(false)}
          >
            <span className="uppercase">clothes</span>
            <span className="uppercase">shoes</span>
            <span className="uppercase">accessories</span>
          </HoverCardContent>
        </HoverCard>
      </HoverCardContent>
    </HoverCard>
  );
};

export default CollectionHover;
