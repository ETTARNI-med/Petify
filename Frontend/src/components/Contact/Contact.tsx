// import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
// import Background from "@/assets/backgound-contact.svg";

export default function index() {
  return (
    <>
      <div className="m-12 ">
        <header className="m8">
          <h1 className="font-tourney align-top m-8 text-5xl flex justify-center	">
            CONTACT US
          </h1>
        </header>
        <section className="flex justify-center m-12 items-center font-Poppins">
          <div className="">
            <Label htmlFor="email" className="">
              Full Name
            </Label>
            <Input
              type="text"
              id="text"
              placeholder="First Name"
              className=" border-b border-solid  border-gray-500 p-2 mb-6  w-full  rounded-none shadow-md "
            />

            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              placeholder="Email"
              className=" border-b border-solid  border-gray-500 p-2 mb-6  w-full  rounded-none shadow-md "
            />
            <br />

            <Textarea
              placeholder="Type your message here."
              className=" border-b border-solid  border-gray-500 p-2 mb-6  w-full h-40 resize-none	  rounded-md shadow-md "
            />
            <div className="flex items-center space-x-2 ">
              <Checkbox id="terms" />
              <Label className="text-xs my-2 " htmlFor="terms" >
                <span className=" text-xl text-red-600 content-center	">*</span>I have been able
                to read and und\erstand the information on the use of my
                personal data explained in the Privacy Policy
              </Label>
            </div>
            <Button className="w-96  bg-secondcolor text-black hover:bg-thirdcolor dark:bg-thirdcolor dark:text-white dark:hover:bg-secondcolor dark:hover:text-black">
              Send message
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}
