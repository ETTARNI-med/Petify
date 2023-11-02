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
      <Button variant={"outline"} size="icon" onClick={clickHandler}>
        <Sun size={20} className="hidden dark:block" />
        <Moon size={20} className="block dark:hidden" />
      </Button>
    </>
  );
}
