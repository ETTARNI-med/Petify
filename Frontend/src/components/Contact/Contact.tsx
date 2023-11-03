import React from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"



export default function index() {
  return (
    <>
 
 <div className='m-12'>
    <div>
        <h1 className='	text-3xl text-black	border-b-2 border-black dark:text-white dark:border-white'>Contact</h1></div>
    <br />
    <br />
    <div className='flex justify-center	m-18'>
    <div className="grid w-full max-w-sm items-center gap-2">
      <Label htmlFor="email">First Name</Label>
      <Input type="email" id="email" placeholder="First Name" /> 
      <Label htmlFor="email">Last Name</Label>
      <Input type="email" id="email" placeholder="Last Name" /> 
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" />
      <br />
      <div className="grid w-full gap-2">
      <Textarea placeholder="Type your message here." />
      <div className="flex items-center space-x-2 ">
        <Checkbox id="terms" />
        <Label className='text-xs my-2 ' htmlFor="terms">I have been able to read and understand the information on the use of my personal data explained in the Privacy Policy</Label>
      </div>
      <Button className='bg-secondcolor text-black hover:bg-thirdcolor dark:bg-thirdcolor dark:text-white dark:hover:bg-secondcolor dark:hover:text-black'>Send message</Button>
    </div>
    </div>
    </div>
    </div>
  
    </>
    
  )
}
