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
          className="w-fit flex justify-between items-center sm:text-sm lg:text-base"
        >
          Bird <ChevronDown />
        </Link>
      </HoverCardTrigger>
      <HoverCardContent className="flex flex-col py-4 px-2 sm:text-sm lg:text-base">
        <HoverCard>
          <div className="px-2 py-1 hover:text-[#FFCC81] cursor-pointer">
            <span>FOOD</span>
          </div>
        </HoverCard>
        <HoverCard>
          <div className="px-2 py-1 hover:text-[#FFCC81] cursor-pointer">
            <span>HEALTH & WELLNESS</span>
          </div>
        </HoverCard>
        <HoverCard>
          <div className="px-2 py-1 hover:text-[#FFCC81] cursor-pointer">
            <span>SUPPLIES</span>
          </div>
        </HoverCard>
        <HoverCard>
          <div className="px-2 py-1 hover:text-[#FFCC81] cursor-pointer">
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
          className="sm:text-sm lg:text-base w-fit flex justify-between items-center "
        >
          Cat <ChevronDown />
        </Link>
      </HoverCardTrigger>
      <HoverCardContent className="sm:text-sm lg:text-base flex flex-col py-4 px-2 ">
        <HoverCard>
          <div className="px-2 py-1 hover:text-[#FFCC81] cursor-pointer">
            <span>FOOD</span>
          </div>
        </HoverCard>
        <HoverCard>
          <div className="px-2 py-1 hover:text-[#FFCC81] cursor-pointer">
            <span>HEALTH & WELLNESS</span>
          </div>
        </HoverCard>
        <HoverCard>
          <div className="px-2 py-1 hover:text-[#FFCC81] cursor-pointer">
            <span>SUPPLIES</span>
          </div>
        </HoverCard>
        <HoverCard>
          <div className="px-2 py-1 hover:text-[#FFCC81] cursor-pointer">
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
          className="sm:text-sm lg:text-base w-fit flex justify-between items-center "
        >
          Dog <ChevronDown />
        </Link>
      </HoverCardTrigger>
      <HoverCardContent className="sm:text-sm lg:text-base flex flex-col py-4 px-2 ">
        <HoverCard>
          <div className="px-2 py-1 hover:text-[#FFCC81] cursor-pointer">
            <span>FOOD</span>
          </div>
        </HoverCard>
        <HoverCard>
          <div className="px-2 py-1 hover:text-[#FFCC81] cursor-pointer">
            <span>HEALTH & WELLNESS</span>
          </div>
        </HoverCard>
        <HoverCard>
          <div className="px-2 py-1 hover:text-[#FFCC81] cursor-pointer">
            <span>SUPPLIES</span>
          </div>
        </HoverCard>
        <HoverCard>
          <div className="px-2 py-1 hover:text-[#FFCC81] cursor-pointer">
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
          className=" sm:text-sm lg:text-base w-fit flex justify-between items-center"
        >
          Fish <ChevronDown />
        </Link>
      </HoverCardTrigger>
      <HoverCardContent className=" sm:text-sm lg:text-base flex flex-col py-4 px-2">
        <HoverCard>
          <div className="px-2 py-1 hover:text-[#FFCC81] cursor-pointer">
            <span>FOOD</span>
          </div>
        </HoverCard>
        <HoverCard>
          <div className="px-2 py-1 hover:text-[#FFCC81] cursor-pointer">
            <span>HEALTH & WELLNESS</span>
          </div>
        </HoverCard>
        <HoverCard>
          <div className="px-2 py-1 hover:text-[#FFCC81] cursor-pointer">
            <span>SUPPLIES</span>
          </div>
        </HoverCard>
        <HoverCard>
          <div className="px-2 py-1 hover:text-[#FFCC81] cursor-pointer">
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
          className=" sm:text-sm lg:text-base w-fit flex justify-between items-center"
        >
          Small Pet <ChevronDown />
        </Link>
      </HoverCardTrigger>
      <HoverCardContent className=" sm:text-sm lg:text-base flex flex-col py-4 px-2">
        <HoverCard>
          <div className="px-2 py-1 hover:text-[#FFCC81] cursor-pointer">
            <span>FOOD</span>
          </div>
        </HoverCard>
        <HoverCard>
          <div className="px-2 py-1 hover:text-[#FFCC81] cursor-pointer">
            <span>HEALTH & WELLNESS</span>
          </div>
        </HoverCard>
        <HoverCard>
          <div className="px-2 py-1 hover:text-[#FFCC81] cursor-pointer">
            <span>SUPPLIES</span>
          </div>
        </HoverCard>
        <HoverCard>
          <div className="px-2 py-1 hover:text-[#FFCC81] cursor-pointer">
            <span>TREATS</span>
          </div>
        </HoverCard>
      </HoverCardContent>
    </HoverCard>
  );
};
