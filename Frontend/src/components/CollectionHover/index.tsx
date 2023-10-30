import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export const Bird = () => {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <Link
          to="/"
          className="w-fit flex justify-between items-center text-lg"
        >
          Bird <ChevronDown />
        </Link>
      </HoverCardTrigger>
      <HoverCardContent className="flex flex-col py-4 px-2 w-52">
        <HoverCard>
          <div className="flex justify-start py-2 hover:text-[#FFCC81] cursor-pointer">
            <span>FOOD</span>
          </div>
        </HoverCard>
        <HoverCard>
          <div className="flex justify-start py-2 hover:text-[#FFCC81] cursor-pointer">
            <span>HEALTH & WELLNESS</span>
          </div>
        </HoverCard>
        <HoverCard>
          <div className="flex justify-start py-2 hover:text-[#FFCC81] cursor-pointer">
            <span>SUPPLIES</span>
          </div>
        </HoverCard>
        <HoverCard>
          <div className="flex justify-start py-2 hover:text-[#FFCC81] cursor-pointer">
            <span>TREATS</span>
          </div>
        </HoverCard>
      </HoverCardContent>
    </HoverCard>
  );
};

export const Cat = () => {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <Link
          to="/"
          className="w-fit flex justify-between items-center text-lg"
        >
          Cat <ChevronDown />
        </Link>
      </HoverCardTrigger>
      <HoverCardContent className="flex flex-col py-4 px-2 w-52">
        <HoverCard>
          <div className="flex justify-start py-2 hover:text-[#FFCC81] cursor-pointer">
            <span>FOOD</span>
          </div>
        </HoverCard>
        <HoverCard>
          <div className="flex justify-start py-2 hover:text-[#FFCC81] cursor-pointer">
            <span>HEALTH & WELLNESS</span>
          </div>
        </HoverCard>
        <HoverCard>
          <div className="flex justify-start py-2 hover:text-[#FFCC81] cursor-pointer">
            <span>SUPPLIES</span>
          </div>
        </HoverCard>
        <HoverCard>
          <div className="flex justify-start py-2 hover:text-[#FFCC81] cursor-pointer">
            <span>TREATS</span>
          </div>
        </HoverCard>
      </HoverCardContent>
    </HoverCard>
  );
};

export const Dog = () => {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <Link
          to="/"
          className="w-fit flex justify-between items-center text-lg"
        >
          Dog <ChevronDown />
        </Link>
      </HoverCardTrigger>
      <HoverCardContent className="flex flex-col py-4 px-2 w-52">
        <HoverCard>
          <div className="flex justify-start py-2 hover:text-[#FFCC81] cursor-pointer">
            <span>FOOD</span>
          </div>
        </HoverCard>
        <HoverCard>
          <div className="flex justify-start py-2 hover:text-[#FFCC81] cursor-pointer">
            <span>HEALTH & WELLNESS</span>
          </div>
        </HoverCard>
        <HoverCard>
          <div className="flex justify-start py-2 hover:text-[#FFCC81] cursor-pointer">
            <span>SUPPLIES</span>
          </div>
        </HoverCard>
        <HoverCard>
          <div className="flex justify-start py-2 hover:text-[#FFCC81] cursor-pointer">
            <span>TREATS</span>
          </div>
        </HoverCard>
      </HoverCardContent>
    </HoverCard>
  );
};

export const Fish = () => {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <Link
          to="/"
          className="w-fit flex justify-between items-center text-lg"
        >
          Fish <ChevronDown />
        </Link>
      </HoverCardTrigger>
      <HoverCardContent className="flex flex-col py-4 px-2 w-52">
        <HoverCard>
          <div className="flex justify-start py-2 hover:text-[#FFCC81] cursor-pointer">
            <span>FOOD</span>
          </div>
        </HoverCard>
        <HoverCard>
          <div className="flex justify-start py-2 hover:text-[#FFCC81] cursor-pointer">
            <span>HEALTH & WELLNESS</span>
          </div>
        </HoverCard>
        <HoverCard>
          <div className="flex justify-start py-2 hover:text-[#FFCC81] cursor-pointer">
            <span>SUPPLIES</span>
          </div>
        </HoverCard>
        <HoverCard>
          <div className="flex justify-start py-2 hover:text-[#FFCC81] cursor-pointer">
            <span>TREATS</span>
          </div>
        </HoverCard>
      </HoverCardContent>
    </HoverCard>
  );
};

export const SmallPet = () => {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <Link
          to="/"
          className="w-fit flex justify-between items-center text-lg"
        >
          Small Pet <ChevronDown />
        </Link>
      </HoverCardTrigger>
      <HoverCardContent className="flex flex-col py-4 px-2 w-52">
        <HoverCard>
          <div className="flex justify-start py-2 hover:text-[#FFCC81] cursor-pointer">
            <span>FOOD</span>
          </div>
        </HoverCard>
        <HoverCard>
          <div className="flex justify-start py-2 hover:text-[#FFCC81] cursor-pointer">
            <span>HEALTH & WELLNESS</span>
          </div>
        </HoverCard>
        <HoverCard>
          <div className="flex justify-start py-2 hover:text-[#FFCC81] cursor-pointer">
            <span>SUPPLIES</span>
          </div>
        </HoverCard>
        <HoverCard>
          <div className="flex justify-start py-2 hover:text-[#FFCC81] cursor-pointer">
            <span>TREATS</span>
          </div>
        </HoverCard>
      </HoverCardContent>
    </HoverCard>
  );
};
