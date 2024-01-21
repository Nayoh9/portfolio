// Package import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { Typewriter, Cursor } from "react-simple-typewriter";

// Assets import
import resume from "/assets/CV_ANDRE_YOHANN.pdf";

const Home = () => {
  const [isGearClicked, setIsGearClicked] = useState(false);
  const [counter, setCounter] = useState(0);
  const [isHamburgerClicked, setIsHamburgerClicked] = useState(false);

  const handleOpenGearMenu = () => {
    isGearClicked ? setIsGearClicked(false) : setIsGearClicked(true);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add(darkMode);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter === 5) {
          clearInterval(interval);
        }
        return prevCounter + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("darkMode?", document.documentElement.classList);
  };

  let darkMode = localStorage.getItem("darkMode?");

  return (
    <section
      onClick={() => {
        if (isGearClicked) {
          setIsGearClicked(false);
        }
        if (isHamburgerClicked) {
          setIsHamburgerClicked(false);
        }
      }}
      className="mb-28 flex h-homeHeight flex-col bg-heroBackGround bg-cover bg-center font-mont text-white "
    >
      <div className="z-00 absolute top-0 h-homeHeight w-full animate-fadeAnim bg-black opacity-50"></div>

      <div
        className="absolute top-28 z-20 flex h-6 w-6 animate-fadeHeader items-center justify-center rounded-sm bg-white"
        onClick={toggleTheme}
      >
        <FontAwesomeIcon icon="fa-solid fa-moon" style={{ color: "#000000" }} />
      </div>

      <header className="z-20 mt-5 flex h-20 w-full animate-fadeHeader items-center justify-between px-20 max-[800px]:px-10 xl:px-32">
        <p className="font-semibold">
          <span className="text-xl font-extrabold">Y</span>ohann
        </p>

        {isHamburgerClicked ? (
          <FontAwesomeIcon
            icon="fa-solid fa-xmark"
            style={{ color: "#ffffff" }}
            className=" hidden h-8 max-[700px]:block"
          />
        ) : (
          <FontAwesomeIcon
            icon="fa-solid fa-bars"
            style={{ color: "#ffffff" }}
            className=" hidden h-8 max-[700px]:block"
            onClick={() => {
              if (isHamburgerClicked) {
                setIsHamburgerClicked(false);
              } else {
                setIsHamburgerClicked(true);
              }
            }}
          />
        )}

        <nav className="right-10 top-24  max-[700px]:absolute max-[700px]:rounded-md ">
          <ul
            className={
              isHamburgerClicked
                ? "flex gap-x-10 rounded-md  transition-all duration-500 max-[700px]:w-40 max-[700px]:flex-col max-[700px]:items-center max-[700px]:gap-y-2 max-[700px]:bg-black max-[700px]:p-2 xl:gap-x-20"
                : "max-[700px]:invisible max-[700px]:opacity-0 min-[700px]:flex  min-[700px]:gap-x-10 xl:gap-x-20"
            }
          >
            <a href="#about">
              <li
                className="relative block w-fit after:absolute after:block after:h-[3px] after:w-full after:origin-center after:scale-x-0 after:bg-white after:transition after:duration-300 after:content-[''] after:hover:scale-x-100"
                onClick={() => setIsHamburgerClicked(false)}
              >
                About
              </li>
            </a>
            <a href="#projects">
              <li
                className="relative block w-fit after:absolute after:block after:h-[3px] after:w-full after:origin-center after:scale-x-0 after:bg-white after:transition after:duration-300 after:content-[''] after:hover:scale-x-100"
                onClick={() => setIsHamburgerClicked(false)}
              >
                Projects
              </li>
            </a>
            <a href="#journey">
              <li
                className="relative block w-fit after:absolute after:block after:h-[3px] after:w-full after:origin-center after:scale-x-0 after:bg-white after:transition after:duration-300 after:content-[''] after:hover:scale-x-100 "
                onClick={() => setIsHamburgerClicked(false)}
              >
                Journey
              </li>
            </a>
            <a href="#contact">
              <li
                className="relative block w-fit after:absolute after:block after:h-[3px] after:w-full after:origin-center after:scale-x-0 after:bg-white after:transition after:duration-300 after:content-[''] after:hover:scale-x-100 "
                onClick={() => setIsHamburgerClicked(false)}
              >
                Contact
              </li>
            </a>
          </ul>
        </nav>
      </header>
      <div className="z-10 flex h-homeHeight w-full flex-col items-center justify-center gap-3 text-center">
        <p className="text-xl font-semibold opacity-70">
          {counter >= 3 && <Typewriter words={["Hello,"]} typeSpeed={100} />}
          {counter === 3 && <Cursor />}
        </p>

        <h1 className="text-3xl font-semibold">
          <span className="font-extralight">
            {counter >= 4 && <Typewriter words={["I Am"]} typeSpeed={100} />}
            {counter === 4 && <Cursor />}
          </span>
          {counter >= 5 && (
            <Typewriter
              words={[" ANDRE Yohann.", " FULL STACK JUNIOR DEVELOPER."]}
              typeSpeed={100}
            />
          )}
          {counter >= 6 && <Cursor />}
        </h1>
        <div className="flex animate-fadeHeader items-center gap-x-3">
          <img src="/assets/line-white.svg" className="w-10 opacity-60" />
          <p className="relative text-xs font-extralight">
            Looking for an internship
          </p>
          <img src="/assets/line-white.svg" className="w-10 opacity-60" />
        </div>
        <a href={resume} download="CV_ANDRE_YOHANN.pdf">
          <button className="animate-fadeHeader rounded-xl bg-white px-5 py-1 text-sm font-semibold text-black transition-all duration-500 ease-linear hover:bg-black hover:text-white">
            HIRE ME
          </button>
        </a>
      </div>

      <div className="absolute top-40 z-40 animate-fadeHeader ">
        <div
          className=" flex h-6 w-6 items-center justify-center rounded-sm bg-white"
          onClick={handleOpenGearMenu}
        >
          <FontAwesomeIcon
            icon="fa-solid fa-gear"
            style={{ color: "#000000" }}
            className="h-6 w-3"
          />
        </div>

        <div
          className={
            isGearClicked
              ? "flex flex-col items-center justify-center gap-y-2  transition-all duration-500 ease-out"
              : "invisible flex -translate-y-5 flex-col items-center justify-center gap-y-2 opacity-0 transition-all duration-500 ease-out"
          }
        >
          <img
            src="https://res.cloudinary.com/dwkwlok28/image/upload/v1704821683/portfolio/line-white_td9yia.svg"
            className="mt-7 w-10 rotate-90 opacity-60"
          />
          <a
            href="https://www.linkedin.com/in/yohann-andr%C3%A9/"
            target="blank"
          >
            <FontAwesomeIcon
              icon="fa-brands fa-linkedin-in"
              style={{ color: "#ffffff" }}
              className=" transition-all hover:scale-150"
            />
          </a>
          <a href="https://github.com/Nayoh9" target="blank">
            <FontAwesomeIcon
              icon="fa-brands fa-github"
              style={{ color: "#ffffff" }}
              className=" transition-all hover:scale-150"
            />
          </a>
          <a href="mailto: y.andre90000@gmail.com" target="blank">
            <FontAwesomeIcon
              icon="fa-solid fa-envelope"
              style={{ color: "#ffffff" }}
              className=" transition-all hover:scale-150"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
