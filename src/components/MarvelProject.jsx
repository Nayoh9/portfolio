// Package import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const MarvelProject = ({ isDelayed }) => {
  return (
    <motion.article
      initial={{ opacity: 0, translateY: "100px" }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 1, delay: isDelayed ? 0.5 : 0.2 }}
      viewport={{ once: true }}
      className="flex h-projectDivHeight justify-center"
    >
      <div className=" w-96 rounded-md bg-lightGrey py-6 dark:bg-gray-900 dark:text-white max-[860px]:w-3/5 max-[600px]:w-4/5">
        <img
          src="/assets/marvel-logo_pgsubf.svg"
          alt="Marvel écrit en blanc sur fond rouge"
          className=" mx-auto h-imageProjectHeight w-64 "
        />
        <div className=" my-6 flex items-center">
          <img
            src="/assets/captain-america-seeklogo.com_j7odqp.svg"
            alt="Bouclier du capitaine America"
            className="h-logoTitleProjectHeight w-10"
          />

          <p className="text-xl font-bold">Marvel Universe</p>
        </div>

        <div>
          <p className="p-2">
            This project queries an API to gather all Marvel heroes and comics.
            By clicking on these heroes or comics, you can access detailed
            information about them. The option to create an account is available
            if you wish to add comics or heroes to your favorites. User
            favorites are stored in a database, ensuring that the information
            persists across sessions.
          </p>
        </div>

        <div className="my-6 flex justify-center gap-x-1">
          <a href="https://github.com/Nayoh9?tab=repositories">
            <img
              src="/assets/stack portfolio/github_irxfsl.png"
              alt="chat blanc sur fond noir, logo github"
              className="w-10"
            />
          </a>
          <a href="https://marvel-universe-9.netlify.app/">
            <FontAwesomeIcon
              icon="fa-solid fa-link"
              className=" h-10 w-10 rotate-12 text-black dark:text-white"
            />
          </a>
        </div>

        <div className=" my-6 flex justify-center gap-x-5">
          <a
            href="https://github.com/Nayoh9/marvel-frontend"
            className=" transition-all hover:scale-110 hover:font-semibold"
          >
            Front-end
          </a>
          <a
            href="https://github.com/Nayoh9/marvel-backend"
            className=" transition-all hover:scale-110 hover:font-semibold"
          >
            Back-end
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-x-2">
          <div className="flex items-center">
            <img
              src="/assets/stack portfolio/reactjs-19291084.png"
              alt="Logo react"
              className="w-8"
            />
            <p className="ml-1 text-xs font-semibold">React</p>
          </div>
          <div className="flex items-center">
            <img
              src="/assets/stack portfolio/express.png"
              alt="Lettre E et X represantant express.js"
              className="w-8"
            />
            <p className="ml-1 text-xs font-semibold">ExpressJS</p>
          </div>
          <div className="flex items-center ">
            <img
              src="/assets/stack portfolio/nodejs-d83eb6dd.png"
              alt="symbole node JS écrit en vert"
              className="w-8"
            />
            <p className="ml-1 text-xs font-semibold">NodeJS</p>
          </div>

          <div className="flex items-center ">
            <img
              src="/assets/stack portfolio/mongodb-54000b2b.png"
              alt="une feuille au millieu d'un écusson representant le logo mongoDB"
              className="w-8"
            />
            <p className="ml-1 text-xs font-semibold">MongoDB</p>
          </div>

          <div className="flex items-center ">
            <img
              src="/assets/stack portfolio/css-79a7f026.png"
              alt="image representant un symbole css blanc sur fond bleu "
              className="w-8"
            />
            <p className="ml-1 text-xs font-semibold">Css</p>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default MarvelProject;
