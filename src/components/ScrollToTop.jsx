// Package import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [isScrollable, setIsScrollable] = useState(false);

  useEffect(() => {
    const scrollDetect = () => {
      if (window.scrollY >= 450) {
        setIsScrollable(true);
      } else {
        setIsScrollable(false);
      }
    };

    document.addEventListener("scroll", scrollDetect);

    return () => {
      document.removeEventListener("scroll", scrollDetect);
    };
  }, []);

  return (
    <a href="#">
      <div
        className={
          isScrollable
            ? " fixed right-1 top-1/2 flex rotate-90 items-center gap-x-1 font-mont font-semibold text-black opacity-100 transition-all  duration-500 max-[1380px]:-right-10 "
            : "invisible fixed right-1 top-1/2 flex items-center  gap-x-1  opacity-0 transition-all duration-500 ease-out "
        }
      >
        <FontAwesomeIcon
          icon="fa-solid fa-arrow-left"
          className="icon animate-scrollToTop "
        />
        <p className=" animate-scrollToTop dark:text-white"> Scroll to top</p>
      </div>
    </a>
  );
};

export default ScrollToTop;
