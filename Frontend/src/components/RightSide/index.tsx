import { ChevronUpSquare } from "lucide-react";
import { useEffect, useState } from "react";

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
        <div className="hidden sm:flex scroll-icon">
          <a
            href="#top"
            className="sm:right-2 md:right-4 lg:right-10 fixed bottom-32"
          >
            <ChevronUpSquare size={40} />
          </a>
        </div>
      )}
    </>
  );
};

export default RightSide;
