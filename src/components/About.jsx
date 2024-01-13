// Package import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

import resume from "../assets/CV_ANDRE_YOHANN.pdf";
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
    <section className="flex w-screen flex-col items-center justify-center font-mont">
      <motion.article
        className="mb-40 flex w-3/5 gap-x-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: counter === 1 ? 1 : 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
      >
        <img
          src="src/assets/Photo floutée.jpeg"
          alt="Photo d'un homme sur fond vert"
          className="w-60 border-4 border-double border-lightGrey object-cover"
        />
        <div className="h-fit flex flex-col">
          <div className="border-1 flex flex-col border-b border-solid border-lightGrey">
            <p className=" mb-2 text-lg font-semibold">Hello,</p>
            <h1 className="mb-4 font-semibold">
              I AM A FULL STACK JUNIOR DEVELOPER
            </h1>
            <p className="mb-4">
              I'm Andre Yohann, a 28-year-old full-stack web developer in
              transition. With a passion for crafting exceptional web
              experiences, I specialize in technologies like HTML, CSS,
              JavaScript, React.js, and Node.js. Explore my portfolio to see how
              I turn ideas into high-performance web solutions. Ready to
              collaborate on your exciting projects ! See you soon.
            </p>
          </div>
          <div className="flex  gap-x-20">
            <div className="mt-4 flex flex-col">
              <div className="flex ">
                <p className="w-20 min-w-fit  font-semibold">NAME </p>
                <p>ANDRE Yohann</p>
              </div>

              <div className="flex ">
                <p className="w-20  min-w-fit  font-semibold">OLD </p>
                <p>28</p>
              </div>
            </div>

            <div className="mt-4 flex flex-col">
              <div className="flex ">
                <p className="w-20 min-w-fit  font-semibold">EMAIL</p>
                <p>y.andre90000@gmail.com</p>
              </div>

              <div className="flex ">
                <p className="w-20 min-w-fit  font-semibold">ADRESS </p>
                <p>Delle, France</p>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <button className="mt-10 flex w-fit rounded-2xl bg-black p-2 px-4 text-white">
              <a href={resume} className="flex" download="CV_ANDRE_YOHANN.pdf">
                <FontAwesomeIcon
                  icon="fa-solid fa-download"
                  style={{ color: "#ffffff" }}
                />
                <p className=" pl-3">DOWNLOAD CV</p>
              </a>
            </button>
          </div>
        </div>
      </motion.article>

      <motion.article
        className="mb-40 flex w-full justify-center bg-lightGrey p-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
      >
        <div>
          <div className="flex flex-col items-center text-center">
            <p className="mb-4 text-xl font-semibold">My Stack</p>

            <div className="flex w-5/6 flex-wrap items-center justify-center gap-x-3">
              <a
                href="https://developer.mozilla.org/fr/docs/Glossary/HTML5"
                target="blank"
              >
                <img
                  src="https://res.cloudinary.com/dwkwlok28/image/upload/v1705153632/stack/html-92b76a73_ogc274.png"
                  alt="symbole HTML blanc sur fond orange"
                  className="w-24 transition-all hover:scale-125"
                />
              </a>
              <a
                href="https://developer.mozilla.org/fr/docs/Web/CSS"
                target="blank"
              >
                <img
                  src="https://res.cloudinary.com/dwkwlok28/image/upload/v1705153632/stack/css-79a7f026_iherah.png"
                  className="w-24 transition-all hover:scale-125"
                  alt="image representant un symbole css blanc sur fond bleu "
                />
              </a>
              <a
                href="https://developer.mozilla.org/fr/docs/Web/JavaScript"
                target="blank"
              >
                <img
                  src="https://res.cloudinary.com/dwkwlok28/image/upload/v1705153632/stack/js_drjbr2.png"
                  alt="lettre JS de Javascript écrit en noir sur fond jaune"
                  className="w-24 transition-all hover:scale-125"
                />
              </a>
              <a href="https://expressjs.com/fr/" target="blank">
                <img
                  src="https://res.cloudinary.com/dwkwlok28/image/upload/v1705165638/stack/pngfind.com-pc-master-race-png-1363736_fspo7d.png"
                  alt="Lettre E et X represantant express.js"
                  className="w-24 transition-all hover:scale-125"
                />
              </a>
              <a href="https://tailwindcss.com/" target="blank">
                <img
                  src="https://res.cloudinary.com/dwkwlok28/image/upload/v1705153633/stack/tailwind-6ece120d_bmtg11.png"
                  alt="Deux traits bleus qui representent le logo tailwind"
                  className="w-24 transition-all hover:scale-125"
                />
              </a>
              <a href="https://nodejs.org/en" target="blank">
                <img
                  src="https://res.cloudinary.com/dwkwlok28/image/upload/v1705153633/stack/nodejs-d83eb6dd_bj3ceg.png"
                  alt="symbole node JS écrit en vert"
                  className="w-24 transition-all hover:scale-125"
                />
              </a>
              <a href="https://reactnative.dev/" target="blank">
                <img
                  src="https://res.cloudinary.com/dwkwlok28/image/upload/v1705153633/stack/reactNative-6e0e6bbf_nb2dkf.png"
                  alt="logo react native"
                  className="w-24 transition-all hover:scale-125"
                />
              </a>
              <a href="https://react.dev/" target="blank">
                <img
                  src="https://res.cloudinary.com/dwkwlok28/image/upload/v1705153633/stack/reactjs-19291084_hyqk5s.png"
                  alt="Logo react"
                  className="h-reactLogoHeight w-24 transition-all hover:scale-125"
                />
              </a>
              <a href="https://www.mongodb.com/fr-fr" target="blank">
                <img
                  src="https://res.cloudinary.com/dwkwlok28/image/upload/v1705153632/stack/mongodb-54000b2b_qevqcx.png"
                  alt="une feuille au millieu d'un écusson representant le logo mongoDB"
                  className="w-24 transition-all hover:scale-125"
                />
              </a>
              <a href="https://git-scm.com/" target="blank">
                <img
                  src="https://res.cloudinary.com/dwkwlok28/image/upload/v1705153632/stack/git_xndgp7.png"
                  alt="logo git transparent sur fond orange"
                  className="w-24 transition-all hover:scale-125"
                />
              </a>
              <a href="https://github.com/Nayoh9" target="blank">
                <img
                  src="https://res.cloudinary.com/dwkwlok28/image/upload/v1703686714/marvel/github_irxfsl.png"
                  alt="Chat transparent sur fond blanc representant le logo github"
                  className="w-24 transition-all hover:scale-125"
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
