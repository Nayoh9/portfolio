// Package import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { Typewriter, Cursor } from "react-simple-typewriter";

const Home = () => {
  const hello = "";
  const [isGearClicked, setIsGearClicked] = useState(false);
  const [counter, setCounter] = useState(0);

  const handleOpenGearMenu = () => {
    isGearClicked ? setIsGearClicked(false) : setIsGearClicked(true);
  };

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

  return (
    <section
      onClick={() => {
        if (isGearClicked) {
          setIsGearClicked(false);
        }
      }}
      className="mb-40 flex h-homeHeight flex-col bg-heroBackGround bg-cover bg-center font-mont text-white"
    >
      <div className=" z-00 absolute top-0 h-homeHeight w-full animate-fadeAnim bg-black opacity-50"></div>

      <header className="h-20 relative mt-5 flex w-full animate-fadeHeader items-center justify-between px-32">
        <p className="font-semibold">
          <span className="text-xl font-extrabold">Y</span>ohann
        </p>
        <nav>
          <ul className=" flex gap-x-20">
            <li className="relative block w-fit after:absolute after:block after:h-[3px] after:w-full after:origin-center after:scale-x-0 after:bg-white after:transition after:duration-300 after:content-[''] after:hover:scale-x-100 ">
              Home
            </li>
            <li className="relative block w-fit after:absolute after:block after:h-[3px] after:w-full after:origin-center after:scale-x-0 after:bg-white after:transition after:duration-300 after:content-[''] after:hover:scale-x-100 ">
              About
            </li>
            <li className="relative block w-fit after:absolute after:block after:h-[3px] after:w-full after:origin-center after:scale-x-0 after:bg-white after:transition after:duration-300 after:content-[''] after:hover:scale-x-100 ">
              Projects
            </li>
            <li className="relative block w-fit after:absolute after:block after:h-[3px] after:w-full after:origin-center after:scale-x-0 after:bg-white after:transition after:duration-300 after:content-[''] after:hover:scale-x-100 ">
              Journey
            </li>
            <li className="relative block w-fit after:absolute after:block after:h-[3px] after:w-full after:origin-center after:scale-x-0 after:bg-white after:transition after:duration-300 after:content-[''] after:hover:scale-x-100 ">
              Contact
            </li>
          </ul>
        </nav>
      </header>
      <div className="z-30 flex h-homeHeight w-full flex-col items-center justify-center gap-3 text-center">
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
          <img src="./src/assets/line-white.svg" className="w-10 opacity-60" />
          <p className="relative text-xs font-extralight">
            Looking for an internship
          </p>
          <img
            src="https://res.cloudinary.com/dwkwlok28/image/upload/v1704821683/portfolio/line-white_td9yia.svg"
            className="w-10 opacity-60"
          />
        </div>
        <button className="animate-fadeHeader rounded-xl bg-white px-5 py-1 text-sm font-semibold text-black transition-all duration-500 ease-linear hover:bg-black hover:text-white">
          HIRE ME
        </button>
      </div>

      <div className="absolute top-40 z-40 animate-fadeHeader ">
        <div
          className=" h-6 flex w-6 items-center justify-center rounded-sm bg-white"
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
              ? "flex flex-col items-center justify-center gap-y-2 transition-all duration-500 ease-out"
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
          <a href="https://wa.me/33659613598" target="blank">
            <FontAwesomeIcon
              icon="fa-brands fa-whatsapp"
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
