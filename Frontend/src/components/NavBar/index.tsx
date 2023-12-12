import PetifyLogo from "@/assets/petlogonew.svg";
import { SearchInput } from "@/components/ui/searchInput";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import {
  Search,
  Heart,
  ShoppingCart,
  UserCircle2,
  History,
  LogOut,
  ChevronDown,
} from "lucide-react";
import SignUp from "../Sheets/SignUp";
import SignIn from "../Sheets/SignIn";
import { Separator } from "@radix-ui/react-separator";
import CardContainer from "../CollectionHover";
import LeftMenu from "@/components/Sheets/LeftMenu";

const NavBar = () => {
  const [singIn, setSingIn] = useState(false);
  return (
    <div className="w-full grid grid-rows-2  gap-5 font-Poppins rounded-lg bg-primarycolor dark:bg-darkcolor">
      <div className="flex px-2  sm:px-0 justify-between sm:justify-around items-center ">
        <LeftMenu />
        <Link to="/" unstable_viewTransition>
          <img src={PetifyLogo} alt="logo" className="w-9 md:w-12 lg:w-14" />
        </Link>
        <span className="searchIcon hidden sm:flex">
          <Search className="sm:w-4 sm:h-auto md:w-5" />
          <SearchInput
            type="search"
            placeholder="Search..."
            className={"w-[50vw] sm:h-8 md:h-[38px]"}
          />
        </span>
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
          <ModeToggle></ModeToggle>
        </ThemeProvider>
        <Separator className="sm:hidden absolute top-12 w-full h-px right-0 bg-slate-200" />
        <Link
          to="/favorites"
          unstable_viewTransition
          className="hidden sm:flex"
        >
          <Button variant={"ghost"} size="icon">
            <Heart size={20} className="sm:w-4 sm:h-auto md:w-5" />
          </Button>
        </Link>
        <Link to="/cart" unstable_viewTransition className="hidden sm:flex">
          <Button variant={"ghost"} size="icon">
            <ShoppingCart size={20} className="sm:w-4 sm:h-auto md:w-5" />
          </Button>
        </Link>
        {singIn ? (
          <>
            <span className="hidden sm:flex account">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center">
                  <Avatar>
                    <AvatarImage src="https://www.shareicon.net/data/512x512/2016/07/26/802043_man_512x512.png" />
                    <AvatarFallback>Avatar</AvatarFallback>
                  </Avatar>
                  <ChevronDown
                    size={20}
                    className="sm:w-4 sm:h-auto md:w-5"
                    strokeWidth={3}
                  />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link
                      to="/profile"
                      className="flex items-center w-full space-x-2"
                    >
                      <UserCircle2
                        size={20}
                        className="sm:w-4 sm:h-auto md:w-5"
                        strokeWidth={1.75}
                      />
                      <span>Profile</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link
                      to="/orders"
                      className="flex items-center w-full space-x-2"
                    >
                      <History
                        size={20}
                        className="sm:w-4 sm:h-auto md:w-5"
                        strokeWidth={1.75}
                      />
                      <span>Orders</span>
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => setSingIn(false)}>
                    <Link to="/" className="flex items-center w-full space-x-2">
                      <LogOut
                        size={20}
                        className="sm:w-4 sm:h-auto md:w-5"
                        strokeWidth={1.75}
                      />
                      <span>Signout</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </span>
          </>
        ) : (
          <>
            <div className="hidden sm:flex sm:w-[20vw] sm:text-sm md:w-[20vw] lg:text-base lg:w-[16vw] justify-between">
              <SignUp></SignUp>
              <SignIn></SignIn>
            </div>
          </>
        )}
      </div>
      <div className="hidden sm:flex h-10 relative mt-1">
        <div className="w-full flex justify-evenly uppercase font-Poppins">
          <CardContainer></CardContainer>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
