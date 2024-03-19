// Package import
import { motion } from "framer-motion";
 
// Component import
import MarvelProject from "./MarvelProject";
import ScansipProject from "./ScansipProject";
import PortfolioProject from "./PortfolioProject";
import KiessProject from "./KiessProject";

const Projects = ({ isDelayed, setIsDelayed }) => {
  return (
    <section
      className="mb-28 flex flex-col items-center pt-12 font-mont"
      id="projects"
    >
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className=" mb-20 text-center text-2xl font-semibold dark:text-white"
      >
        My Projects
      </motion.h1>
      <motion.div className=" flex flex-wrap justify-center gap-10">
        <MarvelProject isDelayed={isDelayed} />
        <ScansipProject isDelayed={isDelayed} />
        <PortfolioProject isDelayed={isDelayed} />
        <KiessProject isDelayed={isDelayed} />
      </motion.div>
    </section>
  );
};

export default Projects;
