import { UserAuthForm } from "./components/user-auth-form";
import PetifyBackDark from "@/assets/background.svg";
import PetifyBack from "@/assets/backgoundLight.svg";
import Petify from "@/assets/PetifyLogo.png";
import { ModeToggle } from "@/components/Theme/mode-toggle";
import { Separator } from "@/components/ui/separator";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-[95vw] mx-auto">
      <div className="justify-center items-center w-full relative h-[92vh] xs:h-[95vh] grid md:grid-cols-2 px-0">
        {/* Navbar for md and lg scr */}
        <div className="hidden md:flex relative h-full flex-col p-10 text-white dark:border-r">
          <div className="relative" />

          <div className="relative z-20 flex items-center justify-center text-lg font-medium uppercase pt-5">
            <img src={Petify} alt="Logo" className="w-8/12 px-2" />
          </div>
          <div className="relative z-20 mt-auto mx-auto bg-black dark:bg-white w-fit rounded opacity-50 backdrop-blur-md">
            <blockquote className="space-y-2 dark:text-black text-white">
              <p className="text-lg py-4 px-4 sm:text-xs md:text-sm lg:text-base">
                &ldquo;Petify, where your pet's happiness is our top
                priority.&rdquo;
              </p>
            </blockquote>
          </div>
        </div>
        {/* Navbar for scr that's smaller than md */}
        <div className="md:hidden">
          <div className="w-fit pl-5 relative z-20 flex items-center text-lg font-medium uppercase xsm:pt-5 pt-10">
            <img src={Petify} alt="Logo" className="w-14 px-2 " />
            Petify
          </div>
        </div>
        <div className="p-16 lg:p-24">
          <div className="flex justify-between items-center">
            <ModeToggle className="w-32 px-2" />
            <span>
              Store <ArrowRight size={30} className="pl-4" />
            </span>
          </div>
          <div className="mx-auto flex w-full flex-col justify-center space-y-10 sm:w-5/6 lg:4/6">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-4xl font-semibold tracking-tight uppercase">
                Log In
              </h1>
              <p className="text-sm text-muted-foreground">Welcome Back!</p>
            </div>
            <UserAuthForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our
              <a
                href="/terms"
                className="underline underline-offset-4 hover:text-primary px-2"
              >
                Terms of Service
              </a>
              and
              <a
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary pl-2"
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
      <footer className="h-4 flex justify-center">
        <div className="w-full flex-col text-[11px] md:text-sm lg:text-base relative  text-slate-500 font-medium">
          <Separator className="bg-[#1e293b]" />
          {/* Footer for xs and bigger scr */}
          <div className="hidden xs:flex pt-1 justify-between items-center">
            <span>Copyright &copy; 2023, Petify</span>
            <Link className="hover:opacity-80" to="/">
              Terms of Sale
            </Link>
            <Link className="hover:opacity-80" to="/">
              Shipping Policy
            </Link>
            <Link className="hover:opacity-80" to="/">
              Privacy Policy
            </Link>
            <Link className="hover:opacity-80" to="/">
              Refund Policy
            </Link>
          </div>
          {/* Footer for scr that's smaller than xs */}
          <div className="flex-col pt-1 xs:hidden">
            <span className="flex justify-between items-center">
              <span>Copyright &copy; 2023, Petify</span>
              <Link className="hover:opacity-80" to="/">
                Terms of Sale
              </Link>
            </span>
            <span className="flex justify-between items-center">
              <Link className="hover:opacity-80" to="/">
                Shipping Policy
              </Link>
              <Link className="hover:opacity-80" to="/">
                Privacy Policy
              </Link>
              <Link className="hover:opacity-80" to="/">
                Refund Policy
              </Link>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
