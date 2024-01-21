// Package import
import { motion } from "framer-motion";

const Contact = ({ isDelayed, setIsDelayed }) => {
  return (
    <section className="mb-40 pt-12 font-mont" id="contact">
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="mb-20 text-center text-2xl font-semibold dark:text-white"
      >
        Contact Me
      </motion.h1>

      <div className=" flex flex-wrap justify-center gap-28 max-[1125px]:flex-col max-[1125px]:items-center ">
        <a href="https://www.linkedin.com/in/yohann-andr%C3%A9/" target="blank">
          <motion.div
            initial={{ opacity: 1, translateY: "100px" }}
            whileInView={{ opacity: 1, translateY: 0, scale: [0, 1.2, 1] }}
            transition={{ duration: 1, delay: isDelayed ? 0.2 : 0.2 }}
            viewport={{ once: true }}
            className=" flex h-contactBoxHeight w-80 flex-1 flex-col items-center rounded-md border-2 border-linkedinColor bg-lightGrey p-10 hover:animate-gigleSocials hover:border-solid dark:bg-gray-900  max-[1125px]:w-contactBoxWidth max-[600px]:w-80"
          >
            <p className="mb-7 text-lg font-semibold dark:text-white">
              Follow me on Linkedin
            </p>
            <img
              src="/assets/LinkedIn_icon.svg_ywrjtt.png"
              alt="logo linkedin"
              className="w-22 h-20"
            />
          </motion.div>
        </a>

        <a href="https://github.com/Nayoh9" target="blank">
          <motion.div
            initial={{ opacity: 0, translateY: "100px" }}
            whileInView={{ opacity: 1, translateY: 0, scale: [0, 1.2, 1] }}
            transition={{ duration: 1, delay: isDelayed ? 0.4 : 0.2 }}
            viewport={{ once: true }}
            className=": flex h-contactBoxHeight w-80  flex-col items-center rounded-md border-2 bg-lightGrey p-10 hover:animate-gigleSocials hover:border-solid dark:bg-gray-900 max-[1125px]:w-contactBoxWidth max-[600px]:w-80"
          >
            <p className="mb-7 text-lg font-semibold dark:text-white">
              Follow me on Github
            </p>
            <img
              src="/assets/stack portfolio/github_irxfsl.png"
              alt="chat blanc sur fond noir representant le logo github "
              className="w-22 h-20"
            />
          </motion.div>
        </a>

        <a href="mailto: y.andre90000@gmail.com">
          <motion.div
            initial={{ opacity: 0, translateY: "100px" }}
            whileInView={{ opacity: 1, translateY: 0, scale: [0, 1.2, 1] }}
            transition={{ duration: 1, delay: isDelayed ? 0.6 : 0.2 }}
            viewport={{ once: true }}
            className=" flex h-contactBoxHeight w-80 flex-col items-center rounded-md border-2 border-gmailColor bg-lightGrey p-10 hover:animate-gigleSocials hover:border-solid dark:bg-gray-900 max-[1125px]:w-contactBoxWidth max-[600px]:w-80 "
          >
            <p className="mb-7  text-lg font-semibold dark:text-white">
              Send me an email
            </p>
            <img
              src="/assets/gmailIcon.svg"
              alt="chat blanc sur fond noir representant le logo github "
              className="w-22 h-20"
            />
          </motion.div>
        </a>
      </div>
    </section>
  );
};

export default Contact;
