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
import { EyeOff } from "lucide-react";
import { Label } from "@radix-ui/react-label";


 import { useState } from "react";

const SignIn = () => {
  const [showInputForm, setShowInputForm] = useState(false);
  const handleForgotPasswordClick = () => {
    setShowInputForm(true);
  };




  // const [getType, setType] = useState({ login: false, reset: false, register: false });
  // type === "register" ? setType({login : false, reset : false , register : true}) : type === "login" ? setType({login : true, reset : false , register : false}) :setType({login : false, reset : true , register : false});
  return (
    
    <form action="">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant={"ghost"}
            className="px-2 sm:border sm:border-input sm:bg-background sm:hover:bg-accent sm:hover:text-accent-foreground sm:text-sm md:text-base uppercase"
          >
            LOG IN
          </Button>
        </SheetTrigger>
        <div >
          {/* <img src={isDarkMode ? DarkBackground : LightBackground} alt="background" className="w-full h-full object-cover opacity-50 blur-[3px]	" /> */}
        <SheetContent className="sm:w-6/12 md:5/12 "   >

          <SheetHeader>
            <SheetTitle className="uppercase">LOG IN</SheetTitle>
            <SheetDescription className="py-2">
              <span className="uppercase">Welcome back.</span>{" "}
             
              
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
              <a className="underline absolute right-7 text-sm" onClick={handleForgotPasswordClick}>
                Forgot your password?
              </a>
              {showInputForm && <SheetContent>
     

        <div className="grid gap-4 py-12">
        <div> Please enter Your Email to get a verification link throw your email</div>
          <div className="grid grid-cols-4 items-center gap-4">
            
            <Label htmlFor="email" className="text-right">
              Email :
            </Label>
            <Input id="Email" placeholder="Enter email" className="col-span-3"  />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit"> Send  </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>}
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
        </div>
      </Sheet>
    </form>
   
  );
};

export default SignIn;
