import { Instagram, Facebook, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import X from "@/assets/X";

const LeftSide = () => {
  return (
    <div className="fixed -rotate-90 h-5 w-56 origin-left-bottom flex items-center justify-between -left-10 bottom-40">
      <h4 className="font-semibold uppercase">Follow Us</h4>
      <Link to="/instagram">
        <Instagram className="hover:text-[#fc1b65]" />
      </Link>
      <Link to="/Facebook">
        <Facebook className="hover:text-[#0866ff]" />
      </Link>
      <Link to="/X">
        <X />
      </Link>
      <Link to="/Linkdin">
        <Linkedin className="hover:text-[#0c68c4]" />
      </Link>
    </div>
  );
};

export default LeftSide;
