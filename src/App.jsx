// Assets import
import "./App.css";

// Component import
import About from "./components/About";
import Home from "./components/Home";

// Package import
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGear, faDownload } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedinIn,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

library.add(faGear, faLinkedinIn, faInstagram, faWhatsapp, faDownload);

function App() {
  window.scrollTo(0, 0);
  return (
    <main className="relative w-screen bg-white">
      <Home />
      <About />
    </main>
  );
}

export default App;
