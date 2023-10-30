import React from 'react';
// import '../styles/Footer.css';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Instagram, Facebook, Twitter } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


export default function Footer() {
  return (
    <div className=''>
      <div className='content-center'>
        <div className='flex justify-around '>
          <div className='flex justify-evenly flex-col items-center '>
            <h4 className='underline'>Follow Us</h4>
            <a href="/instagram">
            <Instagram />
            </a>
            <a href="/Facebook">
            <Facebook />
            </a>
            <a href="/Twitter">
            <Twitter />
            </a>
          </div>
          <div className='flex justify-evenly flex-col items-center '>
            <h4 className='bold underline'>About Petify</h4>
            <a href="Contact">
              <p>Contact us</p>
            </a>
            <a href="/Privacy-policy">
              <p>Privacy Policy</p>
            </a>
            <a href="/Terms-of-use">
              <p>Terms Of Use</p>
            </a>
            <a href="/Cookie-notice">
              <p>Help !</p>
            </a>
          </div>
        
         <div className='   '>
            <h4 className='underline'>Subscribe to our newsletter</h4>
            <p>Stay updated on new releases and features, guides,<br /> and Products.</p>
            <br />
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input type="email" placeholder="Email" />
              <Button type="submit">Subscribe</Button>
            </div>
          </div>
        </div>
        <div className='container mt-10'>
          <h4 className='underline'>FAQ</h4>
          <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Who We Are </AccordionTrigger>
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
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
          </div>
      </div>
     
        <div className='flex justify-center	 mt-10 tracking-widest border-t-2 border-slate-950'>
          <p className='m-5'>All rights reserved to © Petify 2023</p>
        </div>
    </div>
  );
}
