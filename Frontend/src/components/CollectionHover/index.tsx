
import {
 HoverCard,
 HoverCardContent,
 HoverCardTrigger,
} from "@/components/ui/hover-card";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

// Bird component
export const Bird = () => {
 return (
    <HoverCard>
      <HoverCardTrigger>
        <Link
          to="/" unstable_viewTransition

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

// Cat component
export const Cat = () => {
 return (
    <HoverCard>
      <HoverCardTrigger>
        <Link
          to="/" unstable_viewTransition

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

// Dog component
export const Dog = () => {
 return (
    <HoverCard>
      <HoverCardTrigger>
        <Link
          to="/" unstable_viewTransition

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

// Fish component
export const Fish = () => {
 return (
    <HoverCard>
      <HoverCardTrigger>
        <Link
          to="/" unstable_viewTransition

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

// SmallPet component
export const SmallPet = () => {
 return (
    <HoverCard>
      <HoverCardTrigger>
        <Link
          to="/" unstable_viewTransition

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

//
//In this code, we have five components: Bird, Cat, Dog, Fish, and SmallPet. Each component represents a different category of pets and uses the HoverCard component from the "@/components/ui/hover-card" package to create a dropdown menu. The HoverCard component is used as a container for the dropdown menu, while the HoverCardTrigger component is used to trigger the dropdown menu. The HoverCardContent component is used to display the content of the dropdown menu.
//
//Each component follows a similar structure:
//
//1. Import the necessary components and packages.
//2. Define the component and its structure.
//3. Use the HoverCard component as a container for the dropdown menu.
//4. Use the HoverCardTrigger component to trigger the dropdown menu.
//5. Use the HoverCardContent component to display the content of the dropdown menu.
//6. Export the component.
//
//The dropdown menu content includes four categories: FOOD, HEALTH & WELLNESS, SUPPLIES, and TREATS. Each category is displayed as a separate HoverCard component with a hover effect and a cursor pointer.