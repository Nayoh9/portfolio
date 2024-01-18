// Package import
import { motion } from "framer-motion";

const Contact = ({ isDelayed, setIsDelayed }) => {
  return (
    <section className="mb-40 font-mont">
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="mb-20 text-center text-2xl font-semibold"
      >
        Contact Me
      </motion.h1>

      <div className=" flex flex-wrap justify-center gap-28 ">
        <a href="https://www.linkedin.com/in/yohann-andr%C3%A9/" target="blank">
          <motion.div
            initial={{ opacity: 1, translateY: "100px" }}
            whileInView={{ opacity: 1, translateY: 0, scale: [0, 1.2, 1] }}
            transition={{ duration: 1, delay: isDelayed ? 0.2 : 0.2 }}
            viewport={{ once: true }}
            className="h-contactBoxHeight w-contactBoxWidth border-linkedinColor hover:animate-gigleSocials flex flex-col items-center rounded-md border-2 bg-lightGrey p-10 hover:border-solid  "
          >
            <p className="mb-7 text-lg font-semibold">Follow me on Linkedin</p>
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
            className="h-contactBoxHeight w-contactBoxWidth hover:animate-gigleSocials flex flex-col items-center rounded-md border-2 bg-lightGrey p-10 hover:border-solid "
          >
            <p className="mb-7  text-lg font-semibold">Follow me on Github</p>
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
            className="h-contactBoxHeight w-contactBoxWidth border-gmailColor hover:animate-gigleSocials flex flex-col items-center rounded-md border-2 bg-lightGrey p-10 hover:border-solid "
          >
            <p className="mb-7  text-lg font-semibold">Send me an email</p>
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
