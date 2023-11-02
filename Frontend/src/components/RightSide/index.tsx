import { ChevronUpSquare } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RightSide = () => {
  const [showIcon, setShowIcon] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY <= 200;
      setShowIcon(!isTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {showIcon && (
        <div className="scroll-icon">
          <Link to="#top" className="fixed right-10 bottom-32">
            <ChevronUpSquare size={40} />
          </Link>
        </div>
      )}
    </>
  );
};

export default RightSide;
