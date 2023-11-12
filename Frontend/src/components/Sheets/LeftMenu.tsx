"use client";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ChevronRight, Eye, EyeOff, Menu, Search } from "lucide-react";
import { SearchInput } from "../ui/searchInput";
import { Link } from "react-router-dom";
import { Separator } from "../ui/separator";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";

const LeftMenu = () => {
  // const [getType, setType] = useState({ login: false, reset: false, register: false });
  // type === "register" ? setType({login : false, reset : false , register : true}) : type === "login" ? setType({login : true, reset : false , register : false}) :setType({login : false, reset : true , register : false});
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={"ghost"} className="block sm:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"} className="w-full xs:w-7/12">
        <SheetHeader>
          <SheetTitle className="uppercase">Menu</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col justify-between h-[90vh]">
          <div className="flex flex-col justify-between py-2">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="uppercase  text-sm">
                  sign up
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid py-2">
                    <div className="grid grid-cols-4 items-center py-1">
                      <Input
                        id="first_name"
                        placeholder="First Name"
                        className="col-span-4 focus-visible:ring-0"
                      />
                      <span className="absolute right-8 text-xl text-red-600">
                        *
                      </span>
                    </div>
                    <div className="grid grid-cols-4 items-center py-1">
                      <Input
                        id="last_name"
                        placeholder="Last Name"
                        className="col-span-4  focus-visible:ring-0"
                      />
                      <span className="absolute right-8 text-xl text-red-600">
                        *
                      </span>
                    </div>
                    <div className="grid grid-cols-4 items-center py-1">
                      <Input
                        id="email"
                        placeholder="Email"
                        className="col-span-4  focus-visible:ring-0"
                      />
                      <span className="absolute right-8 text-xl text-red-600">
                        *
                      </span>
                    </div>
                    <div className="grid grid-cols-4 items-center py-1">
                      <Input
                        id="password"
                        placeholder="Password"
                        className="col-span-4  focus-visible:ring-0"
                      />
                      <span className="absolute right-8">
                        <EyeOff size={20} strokeWidth={1.75} />
                      </span>
                      <span className="absolute right-16 text-xl text-red-600">
                        *
                      </span>
                    </div>
                    <div className="grid grid-cols-4 items-center py-1">
                      <Input
                        id="duplicate_password"
                        placeholder="Repeat Password"
                        className="col-span-4  focus-visible:ring-0"
                      />
                      <span className="absolute right-8">
                        <Eye size={20} strokeWidth={1.75} />
                      </span>
                      <span className="absolute right-16 text-xl text-red-600">
                        *
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 pt-1 pb-1">
                      <Checkbox id="terms" />
                      <span className="text-xl text-red-600">*</span>
                      <Label
                        htmlFor="terms"
                        className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        I confirm that I have read and accept the terms and
                        conditions
                      </Label>
                    </div>
                  </div>
                  <div className="w-full text-center">
                    <SheetClose asChild>
                      <Button
                        type="submit"
                        variant={"outline"}
                        className="uppercase  text-xs w-3/6"
                      >
                        Create account
                      </Button>
                    </SheetClose>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="uppercase  text-sm">
                  log in
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid py-2">
                    <div className="grid grid-cols-4 items-center py-1">
                      <Input
                        id="email"
                        placeholder="Email"
                        className="col-span-4 focus-visible:ring-0"
                      />
                      <span className="absolute right-8 text-xl text-red-600">
                        *
                      </span>
                    </div>
                    <div className="grid grid-cols-4 items-center py-1">
                      <Input
                        id="password"
                        placeholder="Password"
                        className="col-span-4  focus-visible:ring-0"
                      />
                      <span className="absolute right-8">
                        <EyeOff size={20} strokeWidth={1.75} />
                      </span>
                      <span className="absolute right-16 text-xl text-red-600">
                        *
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 pt-1 pb-2">
                      <Checkbox id="remember" />
                      <Label
                        htmlFor="remember"
                        className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Remember me
                      </Label>
                    </div>
                  </div>
                  <div className="w-full text-center">
                    <SheetClose asChild>
                      <Button
                        type="submit"
                        variant={"outline"}
                        className="uppercase text-xs w-2/6 mx-auto my-2"
                      >
                        LOG IN
                      </Button>
                    </SheetClose>
                  </div>
                  <SheetClose asChild>
                    <span className="underline text-xs my-2">
                      Forgot your password?
                    </span>
                  </SheetClose>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="uppercase  text-sm">
                  Collections
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col mx-auto w-10/12">
                    <Link
                      to="/cat"
                      className="w-full flex justify-between items-center relative"
                    >
                      <Button variant="ghost" className="uppercase text-sm">
                        Cat
                      </Button>
                      <ChevronRight size={16} />
                      <Separator className="absolute -bottom-px w-full" />
                    </Link>
                    <Link
                      to="/dog"
                      className="w-full flex justify-between items-center relative"
                    >
                      <Button variant="ghost" className="uppercase text-sm">
                        Dog
                      </Button>
                      <ChevronRight size={16} />
                      <Separator className="absolute -bottom-px w-full" />
                    </Link>
                    <Link
                      to="/bird"
                      className="w-full flex justify-between items-center relative"
                    >
                      <Button variant="ghost" className="uppercase text-sm">
                        Bird
                      </Button>
                      <ChevronRight size={16} />
                      <Separator className="absolute -bottom-px w-full" />
                    </Link>
                    <Link
                      to="/fish"
                      className="w-full flex justify-between items-center relative"
                    >
                      <Button variant="ghost" className="uppercase text-sm">
                        Fish
                      </Button>
                      <ChevronRight size={16} />
                      <Separator className="absolute -bottom-px w-full" />
                    </Link>
                    <Link
                      to="/smallpet"
                      className="w-full flex justify-between items-center relative"
                    >
                      <Button variant="ghost" className="uppercase text-sm">
                        Small Pet
                      </Button>
                      <ChevronRight size={16} />
                      <Separator className="absolute -bottom-px w-full" />
                    </Link>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <SheetClose asChild>
              <Link
                to="/"
                className="w-full flex justify-between items-center relative h-8 py-[26px]"
              >
                <Button variant="ghost" className="uppercase text-sm">
                  cart
                </Button>
                <ChevronRight size={16} />
                <Separator className="absolute -bottom-px w-full" />
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link
                to="/"
                className="w-full flex justify-between items-center relative h-8 py-7"
              >
                <Button variant="ghost" className="uppercase text-sm">
                  favorites
                </Button>
                <ChevronRight size={16} />
                <Separator className="absolute -bottom-px w-full" />
              </Link>
            </SheetClose>
          </div>
          <span className="searchIcon">
            <SheetClose asChild>
              <Search className="w-4 sm:w-8" />
            </SheetClose>
            <SearchInput
              type="search"
              placeholder="Search..."
              className={"w-full"}
            />
          </span>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default LeftMenu;
