"use client";
import { Button } from "@/components/ui/button";
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
import { Dot } from "lucide-react";
// import { useState } from "react";

interface Props {
  _id?: string;
  username?: string;
  email: string;
  valid?: boolean;
  active?: boolean;
  role?: "admin" | "manager";
  date: string;
  first_name: string;
  last_name: string;
}

export default function ProfileSheet({
  email,
  valid,
  active,
  date,
  first_name,
  last_name,
  role,
  username,
}: Props) {
  const user = typeof username === "undefined" ? false : true;
  console.log(date);

  const newDate = new Date(date).toLocaleString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  // const [getType, setType] = useState({ login: false, reset: false, register: false });
  // type === "register" ? setType({login : false, reset : false , register : true}) : type === "login" ? setType({login : true, reset : false , register : false}) :setType({login : false, reset : true , register : false});
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="px-2 hover:bg-transparent">
          {user ? username : email}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full xsm:w-10/12 sm:w-6/12">
        <SheetHeader>
          <SheetTitle>
            <span className="flex items-center justify-between">
              <span className="uppercase">{first_name + last_name}</span>
              {user ? (
                ""
              ) : active ? (
                <Dot size={40} className="text-green-700" />
              ) : (
                <Dot size={40} className="text-red-700" />
              )}
            </span>
          </SheetTitle>
          <SheetDescription className="py-2">
            {user ? role : valid ? "verefied customer" : "unverefied customer"}
          </SheetDescription>
        </SheetHeader>
        <div className="mt-8 space-y-8">
          <span className="text-center">{email}</span>
          <div className="grid grid-cols-3">
            <span className="uppercase col-span-2 text-wrap">Member since</span>{" "}
            <span className="col-span-3 xs:col-start-2 xs:col-span-2">
              {newDate}
            </span>
          </div>
        </div>
        <SheetFooter className="md:justify-center flex-row flex items-center justify-center">
          <SheetClose asChild>
            <Button
              variant={"outline"}
              className="uppercase w-3/6 absolute bottom-4"
            >
              close
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
