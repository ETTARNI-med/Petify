import { Instagram, Facebook, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import X from "@/assets/X";

const LeftSide = () => {
  return (
    <div className="sm:-left-16 sm:h-4 sm:w-48 md:h-5 md:w-56 sm:-rotate-90  md:origin-left-bottom  lg:-left-10 fixed flex items-center justify-between bottom-40">
      <Link
        to="/instagram"
        className="sm:rotate-90 lg:rotate-0 hover:rotate-90 transition-all duration-300"
      >
        <Instagram className="sm:text-[#fc1b65] lg:text-black hover:text-[#fc1b65]" />
      </Link>
      <Link
        to="/Facebook"
        className="sm:rotate-90 lg:rotate-0 hover:rotate-90 transition-all duration-300"
      >
        <Facebook className="sm:text-[#0866ff] lg:text-black hover:text-[#0866ff]" />
      </Link>
      <Link
        to="/X"
        className="sm:rotate-90 lg:rotate-0 hover:rotate-90 transition-all duration-300"
      >
        <X className="text-black" />
      </Link>
      <Link
        to="/Linkdin"
        className="sm:rotate-90 lg:rotate-0 hover:rotate-90 transition-all duration-300"
      >
        <Linkedin className="sm:text-[#0c68c4] lg:text-black hover:text-[#0c68c4]" />
      </Link>
    </div>
  );
};

export default LeftSide;
