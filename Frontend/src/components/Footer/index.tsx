import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ChevronUpSquare,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";
import X from "@/assets/X";
import Faq from "../Sheets/Faq";

export default function Footer() {
  return (
    // ********* Responsive footer section ***************

    <div className="mt-auto grid">
      <Separator className="xs:hidden" />

      <div className="text-xs md:text-sm lg:text-base p-2 ">
        <div className="w-full flex flex-col sm:hidden">
          <span className="font-semibold uppercase w-full text-center">
            newsletter
          </span>
          <p className="text-slate-500 text-justify">
            Subscribe to our newsletter and stay updated on new Releases and
            Features, Guides, and Products.
          </p>
          <div className="flex py-2 w-full items-center">
            <div className="flex py-1 w-full items-center justify-evenly">
              <div className="gap-1 flex items-center">
                <Checkbox id="cat" className="h-4 w-4" />
                <Label
                  htmlFor="cat"
                  className="text-xs uppercase font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  cat
                </Label>
              </div>
              <div className="gap-1 flex items-center">
                <Checkbox id="dog" className="h-4 w-4" />
                <Label
                  htmlFor="dog"
                  className="text-xs uppercase font-medium  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  dog
                </Label>
              </div>
              <div className="gap-1 flex items-center ">
                <Checkbox id="bird" className="h-4 w-4" />
                <Label
                  htmlFor="bird"
                  className="text-xs uppercase font-medium  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  bird
                </Label>
              </div>
              <div className="gap-1 flex items-center">
                <Checkbox id="fish" className="h-4 w-4" />
                <Label
                  htmlFor="fish"
                  className="text-xs uppercase font-medium  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  fish
                </Label>
              </div>
              <div className="gap-1 flex items-center justify-between">
                <Checkbox id="smallPet" className="h-4 w-4" />
                <Label
                  htmlFor="smallPet"
                  className="text-xs uppercase font-medium  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  small pet
                </Label>
              </div>
            </div>
          </div>
          <div className="flex w-full items-center">
            <Input
              type="email"
              placeholder="Email"
              className="h-8 w-9/12 rounded-r-none border-r-0 focus-visible:ring-0"
            />
            <Button
              type="submit"
              className="h-8 text-xs w-3/12 rounded-l-none uppercase bg-secondcolor hover:bg-thirdcolor dark:bg-thirdcolor dark:hover:bg-secondcolor dark:hover:text-black"
              variant={"outline"}
            >
              Subscribe
            </Button>
          </div>
        </div>
        <Accordion type="single" collapsible className="w-full sm:hidden">
          <AccordionItem value="item-1">
            <AccordionTrigger className="uppercase">
              Useful Links
            </AccordionTrigger>
            <AccordionContent className="text-justify ">
              <div className="flex justify-evenly items-center font-semibold uppercase">
                <Link className="hover:opacity-80" to="/">
                  Home
                </Link>
                <Link className="hover:opacity-80" to="/favorites">
                  Favorites
                </Link>
                <Link className="hover:opacity-80" to="/cart">
                  Cart
                </Link>
                <Link className="hover:opacity-80" to="/">
                  About
                </Link>
                <Link className="hover:opacity-80" to="/">
                  Blog
                </Link>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="uppercase">faqs</AccordionTrigger>
            <AccordionContent className="text-justify">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Who We Are? </AccordionTrigger>
                  <AccordionContent className="md:text-xs lg:text-base text-justify ">
                    Petify, an e-commerce website dedicated to providing
                    pet-related products and services. At Petify, we are
                    committed to protecting your privacy and safeguarding your
                    personal information. This Privacy Policy is designed to
                    help you understand how we collect, use, disclose, and
                    safeguard your personal data when you use our website and
                    services.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Return Policy</AccordionTrigger>
                  <AccordionContent className="md:text-xs lg:text-base text-justify">
                    If you receive a damaged or defective product, please
                    contact our customer support within 10 days for a
                    replacement or refund. We do not accept returns for items
                    that have been used, altered, or damaged by the customer.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Is it animated?</AccordionTrigger>
                  <AccordionContent className="md:text-xs lg:text-base text-justify ">
                    Yes. It's animated by default, but you can disable it if you
                    prefer.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="uppercase">follow us</AccordionTrigger>
            <AccordionContent>
              <div className="flex justify-around items-center py-2 sm:hidden">
                <a href="/instagram">
                  <Instagram className="text-[#fc1b65]" />
                </a>
                <a href="/instagram">
                  <Facebook className="text-[#0866ff]" />
                </a>
                <a href="/X">
                  <X className="text-black dark:text-white" />
                </a>
                <a href="/Linkedin">
                  <Linkedin className="text-[#0c68c4]" />
                </a>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="xs:hidden">
            <AccordionTrigger className="uppercase">
              contact us
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col items-center py-2 w-10/12 mx-auto">
                <div className="w-full flex justify-start items-center gap-2 py-2">
                  <Mail size={20} strokeWidth={3} />
                  <Link to="/Contact">email us</Link>
                </div>
                <div className="w-full flex justify-start items-center gap-2 py-2">
                  <Phone size={20} strokeWidth={3} />
                  <Link to="/">+2126-6424-6323</Link>
                </div>
                <div className="w-full flex justify-start items-center gap-2 py-2">
                  <MapPin size={20} strokeWidth={3} />
                  <span>Street Cairo, Hassan, Rabat</span>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/************************  Normal webpage size  Section  **************************/}

     
        <div className="bg-secondcolor px-4 py-3 text-black rounded">
          <p className="text-center text-sm font-medium">
          Our experts are available 24/7
          </p>
        </div>
        {/* <!--============================== Footer normal size ==============================--> */}

        {/* <div className="hidden sm:flex justify-evenly items-center font-semibold uppercase">
          <Link className="hover:opacity-80" to="/">
            Home
          </Link>
          <Link className="hover:opacity-80" to="/favorites">
            Favorites
          </Link>
          <Link className="hover:opacity-80" to="/cart">
            Cart
          </Link>
          <Link className="hover:opacity-80" to="/AboutUs">
            About US
          </Link>
          <Link className="hover:opacity-80" to="/Blog">
            Blog
          </Link>
        </div> */}
        <div className="hidden sm:grid gap-5 md:gap-10 lg:gap-8  grid-cols-2  justify-items-center  pt-4">
          <div className="hidden text-xs sm:pt-1 md:text-sm md:pt-3 lg:text-base z-10 h-16  text-black p-4 rounded-t xs:flex flex-col ">
            <div className="flex flex-col justify-start items-center">
              <p className="font-semibold">CONTACT US</p>
              <div className="flex items-center gap-4">
                <Phone size={20} strokeWidth={3} />
                <Link to="/">+2126-6424-6323</Link>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={20} strokeWidth={3} />
                <Link to="/Contact">Email us</Link>
              </div>
              <div className="hidden lg:flex items-center gap-2">
                <MapPin size={20} strokeWidth={3} />
                <span>Street Cairo, Hassan, Rabat</span>
              </div>
            </div>
            <div className="flex justify-evenly items-center lg:hidden pt-2">
              <div className="flex items-center gap-2">
                <MapPin size={20} strokeWidth={3} />
                <span>Street Cairo, Hassan, Rabat</span>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-11/12 lg:w-10/12 flex flex-col">
            <span className="font-semibold uppercase w-full text-center">
              newsletter
            </span>
            <p className="text-slate-500 text-justify">
              Subscribe to our newsletter and stay updated on new Releases and
              Features, Guides, and Products.
            </p>
            <div className="grid grid-rows-2  py-2 w-full items-center ">
              <div className="flex py-1 w-full items-center justify-start gap-x-6">
                <div className="gap-1  flex items-center">
                  <Checkbox id="cat" className="h-3 w-3 md:h-4 md:w-4" />
                  <Label
                    htmlFor="cat"
                    className="text-xs md:text-base uppercase font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    cat
                  </Label>
                </div>
                <div className="gap-1 flex items-center">
                  <Checkbox id="dog" className="h-3 w-3 md:h-4 md:w-4" />
                  <Label
                    htmlFor="dog"
                    className="text-xs md:text-base uppercase font-medium  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    dog
                  </Label>
                </div>
                <div className="gap-1  flex items-center ">
                  <Checkbox id="bird" className="h-3 w-3 md:h-4 md:w-4" />
                  <Label
                    htmlFor="bird"
                    className="text-xs md:text-base uppercase font-medium  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    bird
                  </Label>
                </div>
              </div>
              <div className="flex py-1 w-full items-center justify-start gap-x-6">
                <div className="gap-1  flex items-center">
                  <Checkbox id="fish" className="h-3 w-3 md:h-4 md:w-4" />
                  <Label
                    htmlFor="fish"
                    className="text-xs md:text-base uppercase font-medium  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    fish
                  </Label>
                </div>
                <div className="gap-1  flex items-center justify-between">
                  <Checkbox id="smallPet" className="h-3 w-3 md:h-4 md:w-4" />
                  <Label
                    htmlFor="smallPet"
                    className="text-xs md:text-base uppercase font-medium  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    small pet
                  </Label>
                </div>
              </div>
            </div>
            <div className="flex w-full items-center">
              <Input
                type="email"
                placeholder="Email"
                className="xs:h-8 xs:w-8/12 md:w-8/12 md:text-sm lg:w-9/12 lg:text-base rounded-r-none border-r-0 focus-visible:ring-0"
              />
              <Button
                type="submit"
                className="xs:h-8 xs:text-xs xs:w-4/12 md:text-sm lg:text-base rounded-l-none uppercase bg-secondcolor hover:bg-thirdcolor dark:bg-thirdcolor dark:hover:bg-secondcolor dark:hover:text-black"
                variant={"outline"}
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden sm:flex sm:text-xs md:text-sm lg:text-base relative h-16 p-2  justify-between items-center text-slate-500 font-medium">
        <Separator className="absolute top-0 w-full h-px bg-slate-50 left-0" />
        <span>Copyright &copy; 2023, Petify</span>
        <Link className="hover:opacity-80" to="/TermsOfSale">
          {" "}
          Terms of Sale
        </Link>
        <Link className="hover:opacity-80" to="/ShippingPolicy">
          {" "}
          Shipping Policy
        </Link>
        <Link className="hover:opacity-80" to="/PrivacyPolicy">
          {" "}
          Privacy Policy
        </Link>
        <Link className="hover:opacity-80" to="/RefundPolicy">
          {" "}
          Refund Policy
        </Link>
        <Faq></Faq>
      </div>

      <div className="flex sm:hidden w-full items-center">
        <div className="flex w-11/12 flex-col text-xs relative h-16 p-2 justify-center items-center text-slate-500 font-medium">
          <div className="flex justify-around items-center w-full">
            <span className="cursor-pointer">Shipping Policy</span>
            <span className="cursor-pointer">Privacy Policy</span>
            <span className="cursor-pointer">Refund Policy</span>
          </div>
          <div className="flex justify-around items-center w-full">
            <span>Copyright &copy; 2023, Petify</span>
            <span className="cursor-pointer">Terms of Sale</span>
          </div>
        </div>
        <a href="#top" className="scroll-smooth pt-1">
          <ChevronUpSquare size={20} />
        </a>
      </div>
    </div>
  );
}
