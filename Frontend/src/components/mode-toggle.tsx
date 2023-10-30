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
      <Button variant="outline" size="icon" onClick={clickHandler}>
        <Sun className="hidden dark:block" />
        <Moon className="block dark:hidden" />
      </Button>
    </>
  );
}
