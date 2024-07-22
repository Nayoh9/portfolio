// Package import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

import resume from "/assets/curriculum-vitae-andre-yohann.pdf";
import { useEffect, useState } from "react";

const About = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Uniquement appelé quand démonté
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [counter]);

  const handleScroll = () => {
    if (counter < 1) {
      setCounter(counter + 1);
    }
  };

  return (
    <section
      id="about"
      className=" mb-28 flex flex-col items-center justify-center pt-12 font-mont   dark:text-white"
    >
      <motion.article
        className="mb-40 flex justify-center gap-x-6 max-[600px]:flex-col"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: counter === 1 ? 1 : 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
      >
        <img
          src="/assets/photofloutée.jpeg"
          alt="Photo d'un homme sur fond vert"
          className="w-60 border-4 border-double border-lightGrey object-cover max-[900px]:mb-2 max-[900px]:h-fit max-[900px]:w-52 max-[600px]:self-center "
        />
        <div className=" flex h-fit w-1/2 flex-col max-[600px]:w-full">
          <div className="flex flex-col border-b border-solid border-lightGrey max-[600px]:border-none max-[600px]:px-5 ">
            <p className=" mb-2 text-lg font-semibold max-[750px]:text-sm  ">
              Hello,
            </p>
            <h1 className="mb-4 font-semibold max-[750px]:text-sm  ">
              I AM A FULL STACK JUNIOR DEVELOPER
            </h1>
            <p className="max-[600px]: max-xl:text-sm   ">
              I am Yohann, a 28-year-old full-stack web developer in transition.
              With a passion for crafting exceptional web experiences, I
              specialize in technologies such as JavaScript, React.js, React
              Native and Node.js. Explore my portfolio to see how I turn ideas
              into high-performance web solutions. I am ready to collaborate on
              your exciting projects. See you soon!
            </p>
          </div>
          <div className="flex gap-x-20 max-[900px]:gap-x-1 max-[600px]:gap-x-10 max-[600px]:pl-5">
            <div className="mt-4 flex flex-col">
              <div className="flex max-[750px]:flex-col  ">
                <p className="w-24 min-w-fit font-semibold max-[750px]:text-sm ">
                  NAME
                </p>
                <p className=" max-xl:text-sm max-[750px]:text-xs">
                  ANDRE Yohann
                </p>
              </div>

              <div className="flex max-[750px]:flex-col">
                <p className="w-24 min-w-fit font-semibold max-[750px]:text-sm">
                  OLD
                </p>
                <p className=" max-xl:text-sm max-[750px]:text-xs">28</p>
              </div>
            </div>

            <div className="mt-4 flex flex-col">
              <div className="flex max-[750px]:flex-col ">
                <p className="w-24 min-w-fit font-semibold max-[750px]:text-sm">
                  EMAIL
                </p>
                <a href="mailto:y.andre90000@gmail.com">
                  <p className=" max-xl:text-sm max-[750px]:text-xs  ">
                    y.andre90000@gmail.com
                  </p>
                </a>
              </div>

              <div className="flex max-[750px]:flex-col">
                <p className="w-24 min-w-fit  font-semibold max-[750px]:text-sm">
                  ADDRESS
                </p>
                <p className="max-xl:text-sm max-[750px]:text-xs ">
                  Gex, France
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center max-[600px]:justify-center">
            <a
              href={resume}
              className="flex"
              download="curriculum-vitae-andre-yohann.pdf"
            >
              <button className="mt-10 flex w-fit rounded-2xl bg-black p-2 px-4 text-white dark:bg-white dark:text-black ">
                <FontAwesomeIcon icon="fa-solid fa-download" />
                <p className="pl-3 dark:font-semibold ">DOWNLOAD CV</p>
              </button>
            </a>
          </div>
        </div>
      </motion.article>

      <motion.article
        className=" flex w-full justify-center bg-lightGrey p-16 dark:bg-gray-900  max-[600px]:p-5 "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
      >
        <div>
          <div className="flex flex-col items-center text-center">
            <p className="mb-4 text-xl font-semibold dark:text-white">
              My Stack
            </p>

            <div className="flex w-5/6  flex-wrap items-center justify-center gap-x-3">
              <a href="https://developer.mozilla.org/fr/docs/Glossary/HTML5">
                <img
                  src="/assets/stackportfolio/html-92b76a73.png"
                  alt="symbole HTML blanc sur fond orange"
                  className="w-24 transition-all hover:scale-125 max-[600px]:w-14"
                />
              </a>
              <a href="https://developer.mozilla.org/fr/docs/Web/CSS">
                <img
                  src="/assets/stackportfolio/css-79a7f026.png"
                  className="w-24 transition-all hover:scale-125 max-[600px]:w-14"
                  alt="image representant un symbole css blanc sur fond bleu  "
                />
              </a>
              <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript">
                <img
                  src="/assets/stackportfolio/js.png"
                  alt="lettre JS de Javascript écrit en noir sur fond jaune"
                  className="w-24 transition-all hover:scale-125 max-[600px]:w-14"
                />
              </a>
              <a href="https://expressjs.com/fr/">
                <img
                  src="/assets/stackportfolio/express.png"
                  alt="Lettre E et X represantant express.js"
                  className="w-24 transition-all hover:scale-125 max-[600px]:w-14"
                />
              </a>
              <a href="https://tailwindcss.com/">
                <img
                  src="/assets/stackportfolio/tailwind-6ece120d.png"
                  alt="Deux traits bleus qui representent le logo tailwind"
                  className="w-24 transition-all hover:scale-125 max-[600px]:w-14"
                />
              </a>
              <a href="https://nodejs.org/en">
                <img
                  src="/assets/stackportfolio/nodejs-d83eb6dd.png"
                  alt="symbole node JS écrit en vert"
                  className="w-24 transition-all hover:scale-125 max-[600px]:w-14"
                />
              </a>
              <a href="https://reactnative.dev/">
                <img
                  src="/assets/stackportfolio/reactNative-6e0e6bbf.png"
                  alt="logo react native"
                  className="w-24 transition-all hover:scale-125 max-[600px]:w-14"
                />
              </a>
              <a href="https://react.dev/">
                <img
                  src="/assets/stackportfolio/reactjs-19291084.png"
                  alt="Logo react"
                  className="reactLogoHeight w-24 transition-all hover:scale-125 max-[600px]:h-14 max-[600px]:w-14"
                />
              </a>
              <a href="https://www.mongodb.com/fr-fr">
                <img
                  src="/assets/stackportfolio/mongodb-54000b2b.png"
                  alt="une feuille au millieu d'un écusson representant le logo mongoDB"
                  className="w-24 transition-all hover:scale-125 max-[600px]:w-14"
                />
              </a>

              <a href="https://getbootstrap.com/docs/5.3/getting-started/introduction/">
                <img
                  src="/assets/stackportfolio/bootstrap.png"
                  alt="Logo bootstrap"
                  className="reactLogoHeight w-24 transition-all hover:scale-125 max-[600px]:h-14 max-[600px]:w-14"
                />
              </a>

              <a href="https://www.php.net/">
                <img
                  src="/assets/stackportfolio/php.png"
                  alt="logo php"
                  className="w-24 transition-all hover:scale-125 max-[600px]:w-14"
                />
              </a>

              <a href="https://www.mysql.com/fr/">
                <img
                  src="/assets/stackportfolio/mysql.png"
                  alt="Logo mySql"
                  className="w-24 transition-all hover:scale-125 max-[600px]:w-14"
                />
              </a>

              <a href="https://git-scm.com/">
                <img
                  src="/assets/stackportfolio/git.png"
                  alt="logo git transparent sur fond orange"
                  className="w-24 transition-all hover:scale-125 max-[600px]:w-14"
                />
              </a>
              <a href="https://github.com/Nayoh9">
                <img
                  src="/assets/stackportfolio/github_irxfsl.png"
                  alt="Chat transparent sur fond blanc representant le logo github"
                  className="w-24 transition-all hover:scale-125 max-[600px]:w-14"
                />
              </a>
            </div>
          </div>
        </div>
      </motion.article>
    </section>
  );
};

export default About;
