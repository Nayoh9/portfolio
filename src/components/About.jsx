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
    <section className="flex w-screen flex-col items-center justify-center gap-y-20 font-mont">
      <motion.article
        className="mb-44 flex w-3/5 gap-x-6"
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
        <div className="flex h-fit flex-col">
          <div className="border-1 flex flex-col border-b border-solid border-lightGrey">
            <p className=" mb-2 text-lg font-semibold">Hello,</p>
            <p className="mb-4 font-semibold">
              I AM A FULL STACK JUNIOR DEVELOPER
            </p>
            <p className="mb-4">
              Lorem, Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Aperiam quia quisquam sit rerum voluptatem. Numquam quia corporis
              eveniet, mollitia, veniam asperiores placeat enim quo fugit
              reprehenderit aperiam veritatis maiores cupiditate.ipsum dolor sit
              amet consectetur adipisicing elit. Sit, cupiditate?
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
        className="flex w-full justify-center bg-lightGrey"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
      >
        <div className="w-4/5">
          <div className="text-center">
            <p className="mb-4 font-semibold">My Skill</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
              distinctio Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Itaque aperiam voluptas eum odio corporis officiis sed ipsam
              modi laborum ad.
            </p>

            <div>
              <img src="src/assets/css-79a7f026.png" alt="" />
            </div>
          </div>
        </div>
      </motion.article>
    </section>
  );
};

export default About;
