// Assets import
import "./App.css";

// Package import
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedinIn,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

library.add(faGear, faLinkedinIn, faInstagram, faWhatsapp);

function App() {
  const [isGearClicked, setIsGearClicked] = useState(false);

  const handleOpenGearMenu = () => {
    !isGearClicked ? setIsGearClicked(true) : setIsGearClicked(false);
  };
  return (
    <main className="relative h-screen w-screen bg-white">
      <section className="flex  h-4/6 flex-col font-mont text-white">
        <div className="absolute top-0 z-0 h-4/6 w-full bg-hero-banner bg-cover bg-top"></div>
        <div className="z-00 absolute top-0  h-4/6 w-full bg-black opacity-65"></div>
        <header className="relative flex h-20 w-full items-center justify-between px-32">
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
                Contact
              </li>
            </ul>
          </nav>
        </header>
        <div className="sticky flex h-full w-full flex-col items-center justify-center gap-3 text-center">
          <p className="text-lg font-semibold opacity-70">Hello</p>
          <h1 className="text-2xl font-semibold">
            <span className="font-extralight">I Am</span> FULL STACK JUNIOR
            DEVELOPER
          </h1>
          <div className="flex items-center gap-x-3">
            <img
              src="https://res.cloudinary.com/dwkwlok28/image/upload/v1704821683/portfolio/line-white_td9yia.svg"
              className="w-10 opacity-60"
            />
            <p className="relative  text-xs font-extralight">ANDRE YOHANN</p>
            <img
              src="https://res.cloudinary.com/dwkwlok28/image/upload/v1704821683/portfolio/line-white_td9yia.svg"
              className="w-10 opacity-60"
            />
          </div>
          <button className="rounded-xl bg-white px-5 py-1 text-sm font-semibold text-black transition-all ease-linear hover:bg-black hover:text-white">
            HIRE ME
          </button>
        </div>

        <div className="absolute top-40">
          <div className="flex h-6 w-6 items-center justify-center rounded-sm bg-white">
            <FontAwesomeIcon
              icon="fa-solid fa-gear"
              style={{ color: "#000000" }}
              className="h-3 w-3"
              onClick={handleOpenGearMenu}
            />
          </div>

          <div
            style={{ display: isGearClicked ? "flex" : "none" }}
            className="flex flex-col items-center justify-center gap-y-2 "
          >
            <img
              src="https://res.cloudinary.com/dwkwlok28/image/upload/v1704821683/portfolio/line-white_td9yia.svg"
              className="mt-7 w-10 rotate-90 opacity-60"
            />
            <a href="https://www.linkedin.com/in/yohann-andr%C3%A9/">
              <FontAwesomeIcon
                icon="fa-brands fa-linkedin-in"
                style={{ color: "#ffffff" }}
              />
            </a>
            <a href="https://www.instagram.com/naysnayoh/?hl=en-gb">
              <FontAwesomeIcon
                icon="fa-brands fa-instagram"
                style={{ color: "#ffffff" }}
              />
            </a>
            <a href="https://wa.me/33659613598">
              <FontAwesomeIcon
                icon="fa-brands fa-whatsapp"
                style={{ color: "#ffffff" }}
              />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
