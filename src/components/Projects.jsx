// Package import
import { motion } from "framer-motion";

// Component import
import MarvelProject from "./MarvelProject";
import ScansipProject from "./ScansipProject";
import PortfolioProject from "./PortfolioProject";

const Projects = () => {
  return (
    <section className="w-full  font-mont">
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="mb-20 text-center text-2xl font-semibold"
      >
        My Projects
      </motion.h1>
      <div className="flex flex-wrap justify-center gap-10">
        <MarvelProject />
        <ScansipProject />
        <PortfolioProject />
      </div>
    </section>
  );
};

export default Projects;
