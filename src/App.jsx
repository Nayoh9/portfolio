// Assets import
import "./App.css";

// Component import
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Journey from "./components/Journey";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";

// Package import
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGear,
  faDownload,
  faLink,
  faPlay,
  faEnvelope,
  faArrowLeft,
  faBars,
  faXmark,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedinIn,
  faWhatsapp,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

library.add(
  faGear,
  faLinkedinIn,
  faWhatsapp,
  faDownload,
  faGithub,
  faLink,
  faPlay,
  faEnvelope,
  faArrowLeft,
  faBars,
  faXmark,
  faMoon,
  faLink,
);

function App() {
  const [isDelayed, setIsDelayed] = useState(
    window.innerWidth < 1231 ? false : true,
  );

  return (
    <main className="relative w-screen bg-white dark:bg-black">
      <Home />
      <About />
      <Projects isDelayed={isDelayed} setIsDelayed={setIsDelayed} />
      <Journey />
      <Contact isDelayed={isDelayed} setIsDelayed={setIsDelayed} />
      <ScrollToTop />
    </main>
  );
}

export default App;
