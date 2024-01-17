// Assets import
import "./App.css";

// Component import
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Journey from "./components/Journey";

// Package import
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGear,
  faDownload,
  faLink,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedinIn,
  faWhatsapp,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faGear,
  faLinkedinIn,
  faWhatsapp,
  faDownload,
  faGithub,
  faLink,
  faPlay,
);

function App() {
  window.scrollTo(0, 0);
  return (
    <main className="relative w-screen bg-white">
      <Home />
      <About />
      <Projects />
      <Journey />
    </main>
  );
}

export default App;
