// Package import
import { motion } from "framer-motion";

const MarvelProject = () => {
  return (
    <motion.article
      initial={{ opacity: 0, translateY: "-100px" }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 1, delay: 1 }}
      viewport={{ once: true }}
      className="flex h-projectDivHeight justify-center"
    >
      <div className=" w-96 rounded-md bg-lightGrey py-6">
        <img
          src="https://res.cloudinary.com/dwkwlok28/image/upload/v1703682526/marvel/marvel-logo_pgsubf.svg"
          alt="Marvel écrit en blanc sur fond rouge"
          className=" h-imageProjectHeight mx-auto w-64 "
        />
        <div className=" my-6 flex items-center">
          <img
            src="https://res.cloudinary.com/dwkwlok28/image/upload/v1704380261/marvel/captain-america-seeklogo.com_j7odqp.svg"
            alt="Bouclier du capitaine America"
            className="h-logoTitleProjectHeight w-10"
          />

          <p className="text-xl font-bold">Marvel Universe</p>
        </div>

        <div>
          <p className="pl-2">
            This project queries an API to gather all Marvel heroes and comics.
            By clicking on these heroes or comics, you can access detailed
            information about them. The option to create an account is available
            if you wish to add comics or heroes to your favorites. User
            favorites are stored in a database, ensuring that the information
            persists across sessions.
          </p>
        </div>

        <div className="my-6 flex justify-center">
          <a href="https://github.com/Nayoh9?tab=repositories" target="blank">
            <img
              src="https://res.cloudinary.com/dwkwlok28/image/upload/v1703686714/marvel/github_irxfsl.png"
              alt="chat blanc sur fond noir, logo github"
              className="w-10"
            />
          </a>
          <a href="https://marvel-universe-9.netlify.app/" target="blank">
            <img
              src="https://res.cloudinary.com/dwkwlok28/image/upload/v1705163611/171454_link_icon_kffqao.png"
              alt=""
              className="w-10"
            />
          </a>
        </div>

        <div className=" my-6 flex justify-center gap-x-5">
          <a
            href="https://github.com/Nayoh9/marvel-frontend"
            target="blank"
            className=" transition-all hover:scale-110 hover:font-semibold"
          >
            Front-end
          </a>
          <a
            href="https://github.com/Nayoh9/marvel-backend"
            target="blank"
            className=" transition-all hover:scale-110 hover:font-semibold"
          >
            Back-end
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-x-2">
          <div className="flex items-center">
            <img
              src="https://res.cloudinary.com/dwkwlok28/image/upload/v1705153633/stack/reactjs-19291084_hyqk5s.png"
              alt="Logo react"
              className="w-8"
            />
            <p className="ml-1 text-xs font-semibold">React</p>
          </div>
          <div className="flex items-center">
            <img
              src="https://res.cloudinary.com/dwkwlok28/image/upload/v1705165638/stack/pngfind.com-pc-master-race-png-1363736_fspo7d.png"
              alt="Lettre E et X represantant express.js"
              className="w-8"
            />
            <p className="ml-1 text-xs font-semibold">ExpressJS</p>
          </div>
          <div className="flex items-center ">
            <img
              src="https://res.cloudinary.com/dwkwlok28/image/upload/v1705153633/stack/nodejs-d83eb6dd_bj3ceg.png"
              alt="symbole node JS écrit en vert"
              className="w-8"
            />
            <p className="ml-1 text-xs font-semibold">NodeJS</p>
          </div>

          <div className="flex items-center ">
            <img
              src="https://res.cloudinary.com/dwkwlok28/image/upload/v1705153632/stack/mongodb-54000b2b_qevqcx.png"
              alt="une feuille au millieu d'un écusson representant le logo mongoDB"
              className="w-8"
            />
            <p className="ml-1 text-xs font-semibold">MongoDB</p>
          </div>

          <div className="flex items-center ">
            <img
              src="https://res.cloudinary.com/dwkwlok28/image/upload/v1705153632/stack/css-79a7f026_iherah.png"
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
