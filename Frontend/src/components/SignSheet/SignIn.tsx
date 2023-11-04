"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Eye, EyeOff } from "lucide-react";
import { Label } from "@radix-ui/react-label";
// import { useState } from "react";

const SignIn = () => {
  // const [getType, setType] = useState({ login: false, reset: false, register: false });
  // type === "register" ? setType({login : false, reset : false , register : true}) : type === "login" ? setType({login : true, reset : false , register : false}) :setType({login : false, reset : true , register : false});
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          className="px-2 sm:text-sm md:text-base uppercase"
        >
          LOG IN
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="uppercase">LOG IN</SheetTitle>
          <SheetDescription className="py-2">
            <span className="uppercase">Welcome back.</span>{" "}
            <span className="underline absolute right-7 text-sm">
              Forgot your password?
            </span>
          </SheetDescription>
        </SheetHeader>
        <div className="grid py-4">
          <div className="grid grid-cols-4 items-center py-1">
            <Input id="email" placeholder="Email" className="col-span-4" />
            <span className="absolute right-8 text-xl text-red-600">*</span>
          </div>
          <div className="grid grid-cols-4 items-center py-1">
            <Input
              id="password"
              placeholder="Password"
              className="col-span-4"
            />
            <span className="absolute right-8">
              <EyeOff size={20} strokeWidth={1.75} />
            </span>
            <span className="absolute right-16 text-xl text-red-600">*</span>
          </div>
          <div className="flex items-center space-x-2 pt-1 pb-3">
            <Checkbox id="remember" />
            <Label
              htmlFor="remember"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Remember me
            </Label>
          </div>
        </div>
        <SheetFooter className="md:justify-center flex-row flex items-center justify-center">
          <SheetClose asChild>
            <Button
              type="submit"
              variant={"outline"}
              className="uppercase w-3/6"
            >
              LOG IN
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default SignIn;
