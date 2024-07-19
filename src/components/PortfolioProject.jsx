// Package import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const PortfolioProject = ({ isDelayed }) => {
  return (
    <motion.article
      initial={{ opacity: 0, translateY: "100px" }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 1, delay: isDelayed ? 1.5 : 0.2 }}
      viewport={{ once: true }}
      className="flex h-projectDivHeight justify-center"
    >
      <div className="w-96 rounded-md bg-lightGrey py-6 dark:bg-gray-900 dark:text-white  max-[860px]:w-3/5 max-[600px]:w-4/5">
        <img
          src="/assets/logoy.svg"
          alt="Logo representant un Y"
          className="w-26 mx-auto h-imageProjectHeight"
        />
        <div className="my-6 flex items-center pl-4">
          <img
            src="/assets/Laptop_icon.svg"
            alt="Laptop"
            className="mr-2 h-logoTitleProjectHeight w-12"
          />

          <p className="text-xl font-bold">My Portfolio</p>
        </div>

        <div>
          <p className="p-4">
            As a junior developer, my portfolio serves as a comprehensive
            showcase of my skills, highlighting the projects I have already
            completed and providing an exciting preview of upcoming projects. It
            reflects my early professional journey, emphasizing my ongoing
            commitment to crafting innovative and high-quality software
            solutions.
          </p>
        </div>

        <div className="gap-x-1g my-6 flex justify-center gap-x-1">
          <a href="https://github.com/Nayoh9?tab=repositories">
            <img
              src="/assets/stackportfolio/github_irxfsl.png"
              alt="chat blanc sur fond noir, logo github"
              className="w-10"
            />
          </a>
          <a href="https://andre-yohann.netlify.app/">
            <FontAwesomeIcon
              icon="fa-solid fa-link"
              className=" h-10 w-10 rotate-12 text-black dark:text-white"
            />
          </a>
        </div>

        <div className="my-6 flex justify-center px-3">
          <a
            href="https://github.com/Nayoh9/portfolio"
            className=" transition-all hover:scale-110 hover:font-semibold"
          >
            Front-end
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-x-2">
          <div className="flex items-center">
            <img
              src="/assets/stackportfolio/reactjs-19291084.png"
              alt="Logo react"
              className="w-8"
            />
            <p className="ml-1 text-xs font-semibold">React</p>
          </div>

          <div className="flex items-center ">
            <img
              src="/assets/stackportfolio/tailwind-6ece120d.png"
              alt="Deux traits bleus representant le logo Tailwind"
              className="w-8"
            />
            <p className="ml-1 text-xs font-semibold">Tailwind</p>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default PortfolioProject;
