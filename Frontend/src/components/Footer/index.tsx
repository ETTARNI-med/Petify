import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";

export default function Footer() {
  return (
    <div className="mt-auto grid grid-rows-3">
      <div className="h-16 font-semibold text-white bg-slate-400 p-2 rounded-t row-span-1 flex justify-evenly items-center">
        <p>Our experts are available 24/7:</p>
        <div className="flex items-center gap-2">
          <Phone size={20} strokeWidth={3} />
          <Link to="/">+2126-6424-6323</Link>
        </div>
        <div className="flex items-center gap-2">
          <Mail size={20} strokeWidth={3} />
          <Link to="/">email us</Link>
        </div>
        <div className="flex items-center gap-2">
          <MapPin size={20} strokeWidth={3} />
          <Link to="/">Street Cairo, Hassan, Rabat</Link>
        </div>
      </div>
      <div className="-mt-6 p-2  row-span-2">
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
        <div className="grid grid-cols-2 gap-20 justify-items-center items-center pt-4">
          <div className="w-10/12">
            <span className="font-semibold text-center uppercase">FAQs</span>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Who We Are? </AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Return Policy</AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that matches the other
                  components&apos; aesthetic.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent>
                  Yes. It's animated by default, but you can disable it if you
                  prefer.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="w-10/12 flex flex-col">
            <span className="font-semibold uppercase  text-center">
              newsletter
            </span>
            <p className="text-slate-500">
              Subscribe to our newsletter and stay updated on new Releases and
              Features, Guides, and Products.
            </p>
            <div className="py-2 flex w-full items-center justify-evenly">
              <div className="gap-2 flex items-center">
                <Checkbox id="cat" />
                <Label
                  htmlFor="cat"
                  className="uppercase text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  cat
                </Label>
              </div>
              <div className="gap-2 flex items-center">
                <Checkbox id="dog" />
                <Label
                  htmlFor="dog"
                  className="uppercase text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  dog
                </Label>
              </div>
              <div className="gap-2 flex items-center">
                <Checkbox id="bird" />
                <Label
                  htmlFor="bird"
                  className="uppercase text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  bird
                </Label>
              </div>
              <div className="gap-2 flex items-center">
                <Checkbox id="fish" />
                <Label
                  htmlFor="fish"
                  className="uppercase text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  fish
                </Label>
              </div>
              <div className="gap-2 flex items-center justify-between">
                <Checkbox id="smallPet" />
                <Label
                  htmlFor="smallPet"
                  className="uppercase text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  small pet
                </Label>
              </div>
            </div>
            <div className="flex w-full items-center">
              <Input
                type="email"
                placeholder="Email"
                className="rounded-r-none border-r-0 focus-visible:ring-0"
              />
              <Button
                type="submit"
                className="rounded-l-none uppercase"
                variant={"outline"}
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-16 p-2 row-span-3 flex justify-between items-center text-slate-500 font-medium">
        <Separator className="absolute top-0 w-full h-px bg-slate-200" />
        <span>Copyright &copy; 2023, Petify</span>
        <span className="cursor-pointer">Terms of Sale</span>
        <span className="cursor-pointer">Shipping Policy</span>
        <span className="cursor-pointer">Privacy Policy</span>
        <span className="cursor-pointer">Refund Policy</span>
      </div>
    </div>
  );
}
