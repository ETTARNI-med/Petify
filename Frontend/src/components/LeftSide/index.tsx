import { Instagram, Facebook, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import X from "@/assets/X";

const LeftSide = () => {
  return (
    <div className="fixed -rotate-90 h-5 w-56 origin-left-bottom flex items-center justify-between -left-10 bottom-40">
      <h4 className="font-semibold uppercase cursor-vertical-text">
        Follow Us
      </h4>
      <Link
        to="/instagram"
        className="hover:rotate-90 transition-all duration-300"
      >
        <Instagram className="hover:text-[#fc1b65]" />
      </Link>
      <Link
        to="/Facebook"
        className="hover:rotate-90 transition-all duration-300"
      >
        <Facebook className="hover:text-[#0866ff]" />
      </Link>
      <Link to="/X" className="hover:rotate-90 transition-all duration-300">
        <X />
      </Link>
      <Link
        to="/Linkdin"
        className="hover:rotate-90 transition-all duration-300"
      >
        <Linkedin className="hover:text-[#0c68c4]" />
      </Link>
    </div>
  );
};

export default LeftSide;
