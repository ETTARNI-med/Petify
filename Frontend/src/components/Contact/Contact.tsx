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
      <div className="m-12 "  >
        <header className="m8">
          <h1 className="font-tourney align-top m-8 text-5xl flex justify-center	">
            CONTACT US
          </h1>
        </header>
        <section className="m-8">
          <div className="flex justify-center	m-10">
            <div className="grid w-full max-w-sm items-center gap-2">
              <Label htmlFor="email">First Name</Label>
              <Input type="email" id="email" placeholder="First Name" />
              <Label htmlFor="email">Last Name</Label>
              <Input type="email" id="email" placeholder="Last Name" />
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Email" />
              <br />
              
                <Textarea placeholder="Type your message here." />
                <div className="flex items-center space-x-2 ">
                  <Checkbox id="terms" />
                  <Label className="text-xs my-2 " htmlFor="terms">
                    <span className=" text-xl text-red-600">*</span>I have been
                    able to read and und\erstand the information on the use of
                    my personal data explained in the Privacy Policy
                  </Label>
                </div>
                <Button className="bg-secondcolor text-black hover:bg-thirdcolor dark:bg-thirdcolor dark:text-white dark:hover:bg-secondcolor dark:hover:text-black">
                  Send message
                </Button>
              
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
