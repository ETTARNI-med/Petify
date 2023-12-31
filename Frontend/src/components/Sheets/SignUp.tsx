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
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Label } from "@radix-ui/react-label";

// import { useState } from "react";

interface Props {
  onUpdate: (variable: boolean) => void;
}

const SignUp = ({ onUpdate }: Props) => {
  // const [getType, setType] = useState({ login: false, reset: false, register: false });
  // type === "register" ? setType({login : false, reset : false , register : true}) : type === "login" ? setType({login : true, reset : false , register : false}) :setType({login : false, reset : true , register : false});
  const [showInputForm, setShowInputForm] = useState(false);
  const [showVerificationForm, setShowVerificationForm] = useState(false);

  const handleSubmit = () => {
    setShowInputForm(false);
    setShowVerificationForm(true);
  };
  const handleSheetContentClick = (e) => {
    e.stopPropagation(); // Stop the click event from propagating to SheetClose
  };
  return (
    <form action="">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            className="px-2 sm:border sm:border-input sm:bg-background sm:hover:bg-accent sm:hover:text-accent-foreground sm:text-sm md:text-base uppercase"
          >
            SIGN UP
          </Button>
        </SheetTrigger>
        <SheetContent className="sm:w-6/12 md:5/12">
          <SheetHeader>
            <SheetTitle className="uppercase">sign up</SheetTitle>
            <SheetDescription className="uppercase py-2">
              Create your account to discover our special offers.
            </SheetDescription>
          </SheetHeader>
          <div className="grid py-4">
            <div className="grid grid-cols-4 items-center py-1">
              <Input
                id="first_name"
                placeholder="First Name"
                className="col-span-4"
              />
              <span className="absolute right-8 text-xl text-red-600">*</span>
            </div>
            <div className="grid grid-cols-4 items-center py-1">
              <Input
                id="last_name"
                placeholder="Last Name"
                className="col-span-4"
              />
              <span className="absolute right-8 text-xl text-red-600">*</span>
            </div>
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
            <div className="grid grid-cols-4 items-center py-1">
              <Input
                id="duplicate_password"
                placeholder="Repeat Password"
                className="col-span-4"
              />
              <span className="absolute right-8">
                <Eye size={20} strokeWidth={1.75} />
              </span>
              <span className="absolute right-16 text-xl text-red-600">*</span>
            </div>
            <div className="flex items-center space-x-2 pt-1 pb-3">
              <Checkbox id="terms" />
              <span className="text-xl text-red-600">*</span>
              <Label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I confirm that I have read and accept the terms and conditions
              </Label>
            </div>
          </div>

          <SheetFooter className="md:justify-center flex-row flex items-center justify-center">
            <Button
              type="submit"
              variant={"outline"}
              className="uppercase w-3/6"
              onClick={handleSubmit}
            >
              Create account
            </Button>
          </SheetFooter>
        </SheetContent>
        <SheetClose asChild>
          {showVerificationForm && (
            <SheetContent onClick={handleSheetContentClick}>
              <div className="grid gap-2 py-12">
                <div>Please enter the code sent to Your Email</div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Code :
                  </Label>
                  <Input
                    id="code"
                    placeholder="enter code"
                    className="col-span-3"
                    maxLength={4}
                  />
                </div>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button type="submit" onClick={() => onUpdate(true)}>
                    Validate Account
                  </Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          )}
        </SheetClose>
      </Sheet>
    </form>
  );
};

export default SignUp;
