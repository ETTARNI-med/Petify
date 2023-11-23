import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const clickHandler = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  return (
    <>
      <Button variant={"ghost"} size="icon" onClick={clickHandler}>
        <Sun size={20} className="sm:w-4 sm:h-auto md:w-5 hidden dark:block" />
        <Moon size={20} className="sm:w-4 sm:h-auto md:w-5 block dark:hidden" />
      </Button>
    </>
  );
}
