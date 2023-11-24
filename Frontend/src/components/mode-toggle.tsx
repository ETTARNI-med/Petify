import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import LightBackground from "@/assets/backgound.svg";
import DarkBackground from "@/assets/background-dark.svg";
// import React, { useState } from 'react';

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const clickHandler = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  const BackgroundImage = theme === "dark" ? DarkBackground : LightBackground;

  return (
    <>
      <Button variant={"ghost"} size="icon" onClick={clickHandler}>
        <Sun size={20} className="sm:w-4 sm:h-auto md:w-5 hidden dark:block" />
        <Moon size={20} className="sm:w-4 sm:h-auto md:w-5 block dark:hidden" />
      </Button>
      <div className="fixed top-0 left-0 w-full h-full z-[-1]">
        <img
          src={BackgroundImage}
          alt="background"
          className="w-full h-full object-cover opacity-50 blur-[3px]"
        />
      </div>
    </>
  );
}
