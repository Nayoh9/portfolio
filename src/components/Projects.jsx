// Package import
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Component import
import MarvelProject from "./MarvelProject";
import ScansipProject from "./ScansipProject";
import PortfolioProject from "./PortfolioProject";

const Projects = () => {
  const [isDelayed, setIsDelayed] = useState(
    window.innerWidth < 1231 ? false : true,
  );

  return (
    <section className="mb-40 w-full font-mont">
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="mb-20 text-center text-2xl font-semibold"
      >
        My Projects
      </motion.h1>
      <motion.div className="flex flex-wrap justify-center gap-10">
        <MarvelProject setIsDelayed={setIsDelayed} isDelayed={isDelayed} />
        <ScansipProject setIsDelayed={setIsDelayed} isDelayed={isDelayed} />
        <PortfolioProject setIsDelayed={setIsDelayed} isDelayed={isDelayed} />
      </motion.div>
    </section>
  );
};

export default Projects;
