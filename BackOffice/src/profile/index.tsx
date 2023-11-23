"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useState } from "react";
import { X } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// This can come from your database or API.

export default function Profile() {
  const User = {
    email: "ken99@yahoo.com",
    username: "en99",
    role: "Admin",
    date: "2023-11-23T11:00:00",
    first_name: "ken",
    last_name: "aguero",
  };
  const { role, date, email, username, first_name, last_name } = User;
  const newDate = new Date(date).toLocaleString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  console.log(newDate);
  const message = (
    <Alert>
      <AlertTitle className="flex justify-between items-center pb-3">
        Profile Updated!
        <X size={14} onClick={() => setTitle(false)} />
      </AlertTitle>
      <AlertDescription>
        Your profile has been updated successfully.
      </AlertDescription>
    </Alert>
  );
  const [title, setTitle] = useState(false);
  return (
    <form className="grid grid-cols-1 sm:grid-cols-2 sm:gap-4 items-center justify-start w-[80vw] mx-auto space-y-4">
      <div className="sm:col-span-1 self-end space-y-2 sm:space-y-4 mx-auto">
        <Badge className="w-full text-lg text-center">{role}</Badge>
      </div>
      <div className="sm:col-span-1 self-end space-y-2 sm:space-y-4 mx-auto">
        <p>Member since : {newDate}</p>
      </div>
      <div className="sm:col-span-1 self-end space-y-2 sm:space-y-4">
        <Label className="ml-2">Username</Label>
        <Input placeholder="amineMah" defaultValue={username} />
      </div>
      <div className="sm:col-span-1 self-end space-y-2 sm:space-y-4">
        <Label className="ml-2">Email</Label>
        <Input placeholder="amineMahmoudi@gmail.com" defaultValue={email} />
      </div>
      <div className="sm:col-span-1 self-end space-y-2 sm:space-y-4">
        <Label className="ml-2">First Name</Label>
        <Input placeholder="amine" defaultValue={first_name} />
      </div>
      <div className="sm:col-span-1 self-end space-y-2 sm:space-y-4">
        <Label className="ml-2">last Name</Label>
        <Input placeholder="mahmoudi" defaultValue={last_name} />
      </div>
      <div className="sm:col-span-1 self-end space-y-2 sm:space-y-4">
        <Label className="ml-2">New Password</Label>
        <Input type="password" />
      </div>
      <div className="sm:col-span-1 self-end space-y-2 sm:space-y-4">
        <Label className="ml-2">Password</Label>
        <Input type="password" />
      </div>
      <div className="sm:col-span-2 ml-auto">
        <Button
          variant="outline"
          onClick={(e) => {
            e.preventDefault();
            setTitle(true);
            setTimeout(() => {
              setTitle(false);
            }, 3000);
          }}
          type="button"
        >
          Update profile
        </Button>
      </div>
      <div className="absolute bottom-4 right-4">{title && message}</div>
    </form>
  );
}
