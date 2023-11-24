import React from "react";
// import utilities
// import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Label } from "@radix-ui/react-label";


// start of the sheet
const Faq = () => {
  return (
    <>
           <div className="font-Poppins">

      <Sheet >
        <SheetTrigger asChild className="sm:text-sm lg:text-xs w-fit items-center cursor-pointer ">
          <Label onClick={( )=> Faq()} >FAQs</Label>
          {/* <Button variant='ghost'>FAQs</Button> */}
        </SheetTrigger>
     
        <SheetContent className="font-Poppins">
          <SheetHeader>
            <SheetTitle>FAQS</SheetTitle>
            <SheetDescription>
            Discover the frequent questions that's been asked 
            </SheetDescription>
          </SheetHeader>
          <Accordion type="multiple" className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Who We Are? </AccordionTrigger>
              <AccordionContent className="md:text-xs lg:text-base text-justify ">
                Petify, an e-commerce website dedicated to providing pet-related
                products and services. At Petify, we are committed to protecting
                your privacy and safeguarding your personal information. This
                Privacy Policy is designed to help you understand how we
                collect, use, disclose, and safeguard your personal data when
                you use our website and services.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Return Policy</AccordionTrigger>
              <AccordionContent className="md:text-xs lg:text-base text-justify">
                If you receive a damaged or defective product, please contact
                our customer support within 10 days for a replacement or refund.
                We do not accept returns for items that have been used, altered,
                or damaged by the customer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Are the products on Petify safe for my pet?</AccordionTrigger>
              <AccordionContent className="md:text-xs lg:text-base text-justify ">
              Yes, we prioritize the safety and well-being of your pets. Our
                  products are sourced from reputable brands and undergo quality
                  checks. If you have specific concerns, feel free to contact
                  our customer support for more information.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </SheetContent>
      </Sheet>
      </div>
    </>
  );
};
export default Faq;
