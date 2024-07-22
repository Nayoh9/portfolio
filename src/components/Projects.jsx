// Package import
import { motion } from "framer-motion";

// Component import

import ScansipProject from "./ScansipProject";
import PortfolioProject from "./PortfolioProject";
import PortfolioPhp from "./PortfolioPhp";

const Projects = ({ isDelayed, setIsDelayed }) => {
  return (
    <section
      className="mx-10 mb-28 flex flex-col pt-12 font-mont"
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

      <motion.div className="mb-2 flex flex-wrap justify-center gap-2">
        {/* <MarvelProject isDelayed={isDelayed} /> */}
        <ScansipProject isDelayed={isDelayed} />
        <PortfolioProject isDelayed={isDelayed} />
        <PortfolioPhp isDelayed={isDelayed} />
      </motion.div>
    </section>
  );
};

export default Projects;
