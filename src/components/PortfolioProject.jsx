// Package import
import { motion } from "framer-motion";

const PortfolioProject = ({ setIsDelayed, isDelayed }) => {
  console.log(isDelayed);
  return (
    <motion.article
      initial={{ opacity: 0, translateY: "100px" }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 1, delay: isDelayed ? 2 : 0.2 }}
      viewport={{ once: true }}
      className="flex h-projectDivHeight justify-center"
    >
      <div className="w-96 rounded-md bg-lightGrey py-6">
        <img
          src="https://res.cloudinary.com/dwkwlok28/image/upload/v1705267490/portfolio/scansip_t524mx.svg"
          alt="Scan Sip écrit en blanc et vert sur fond noir"
          className="w-26 mx-auto h-imageProjectHeight"
        />
        <div className="my-6 flex items-center pl-2">
          <img
            src="src/assets/Laptop_icon.svg"
            alt="Laptop"
            className="mr-2 h-logoTitleProjectHeight w-12"
          />

          <p className="text-xl font-bold">My Portfolio</p>
        </div>

        <div>
          <p className="pl-2">
            As a junior developer, my portfolio serves as a comprehensive
            showcase of my skills, highlighting the projects I have already
            completed and providing an exciting preview of upcoming projects. It
            reflects my early professional journey, emphasizing my ongoing
            commitment to crafting innovative and high-quality software
            solutions.
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
          <a href="https://andre-yohann.netlify.app/" target="blank">
            <img
              src="https://res.cloudinary.com/dwkwlok28/image/upload/v1705163611/171454_link_icon_kffqao.png"
              alt=""
              className="w-10"
            />
          </a>
        </div>

        <div className="my-6 flex justify-center gap-x-3">
          <a
            href="https://github.com/Nayoh9/portfolio"
            target="blank"
            className=" transition-all hover:scale-110 hover:font-semibold"
          >
            Front-end
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

          <div className="flex items-center ">
            <img
              src="https://res.cloudinary.com/dwkwlok28/image/upload/v1705153633/stack/tailwind-6ece120d_bmtg11.png"
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
