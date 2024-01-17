// Package import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const divJourneyVariants = {
  leftVisible: {
    x: [-100, 20, 0],
    opacity: 1,
  },
  rightVisible: {
    x: [100, -20, 0],
    opacity: 1,
  },
};

const Journey = () => {
  return (
    <main className="flex flex-col font-mont">
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="mb-20 text-center text-2xl font-semibold"
      >
        My Journey
      </motion.h1>

      <section className="timeline relative flex flex-col items-center gap-y-10">
        <article className=" flex w-5/12 flex-col">
          <motion.div
            animate={{
              scale: [0, 1.2, 1],
            }}
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="  z-10 flex w-full justify-center"
            viewport={{ once: true }}
          >
            <div className="relative flex h-logoTimelineHeight w-14 translate-y-12  justify-center rounded-3xl bg-lightGrey">
              <motion.img
                src="/assets/kyriad-seeklogo.svg"
                className="w-15 relative z-10"
                animate={{
                  scale: [0, 1.2, 1],
                }}
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              />
            </div>
          </motion.div>
          <div className="flex justify-between">
            <motion.div
              className=" relative flex w-5/12 flex-col items-start gap-y-3 rounded-md bg-lightGrey p-3 "
              variants={divJourneyVariants}
              whileInView="leftVisible"
              initial={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h2 className=" text-xl font-semibold">Hotel Industry Career</h2>

              <p className="text-sm">
                From the age of 18 to 27, I worked in the hotel industry. I
                started as a night auditor while pursuing studies in sports,
                which I discontinued at the age of 19.
              </p>
              <p className="text-sm">
                From that point onward, I continued my career in the hotel
                industry and progressed to become a versatile receptionist.
                Finally, at the age of 25, I achieved the position of Front Desk
                Manager.
              </p>
              <p className="text-sm">
                In this environment, I was able to develop strong customer
                relations skills, a great deal of precision, and a deep respect
                for protocols.
              </p>
              <p className="absolute -right-48 top-3  text-lightGrey">
                2013 - 2022
              </p>

              <FontAwesomeIcon
                icon="fa-solid fa-play"
                style={{ color: "#D3D3D3" }}
                className="absolute -right-2 top-4"
              />
            </motion.div>
          </div>
        </article>

        <article className="flex w-5/12 flex-col items-end">
          <motion.div
            animate={{
              scale: [0, 1.2, 1],
            }}
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="  z-10 flex w-full justify-center "
            viewport={{ once: true }}
          >
            <div className=" flex h-logoTimelineHeight w-14 translate-y-12 justify-center rounded-3xl bg-lightGrey">
              <motion.img
                src="/assets/programmingLaptop.png"
                className="z-10 my-auto h-logoTitleProjectHeight w-10  "
                animate={{
                  scale: [0, 1.2, 1],
                }}
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              />
            </div>
          </motion.div>
          <motion.div
            className="relative flex w-5/12 flex-col items-start gap-y-3 rounded-md bg-lightGrey p-3"
            variants={divJourneyVariants}
            whileInView="rightVisible"
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h2 className=" text-xl font-semibold">Discovery of Programming</h2>

            <p className="text-sm">
              After almost 10 years of a career in the hotel industry, I no
              longer found the job satisfying, and I felt the need for a change.
            </p>
            <p className="text-sm">
              I looked for a profession that involved working on a computer and
              allowed for self-expression, leading me to the discovery of
              programming. I started by learning the basics of HTML5 and CSS3
              through a 240-page online course. I found this experience very
              engaging, and after creating a few showcase websites, I delved
              into the world of vanilla JavaScript.
            </p>
            <p className="text-sm">
              Being able to manipulate the DOM and handle events, triggering
              actions while customizing my page with CSS, gave me a sense of
              limitless possibilities. For almost a year, I continued to learn
              on my own.
            </p>
            <p className="absolute -left-48 top-3  text-lightGrey">
              2022 - 2023
            </p>

            <FontAwesomeIcon
              icon="fa-solid fa-play"
              style={{ color: "#D3D3D3" }}
              className="absolute -left-2 top-4 rotate-180"
            />
          </motion.div>
        </article>

        <article className="mb-10 flex w-5/12 flex-col ">
          <motion.div
            animate={{
              scale: [0, 1.2, 1],
            }}
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="  z-10 flex w-full justify-center"
            viewport={{ once: true }}
          >
            <div className="flex h-logoTimelineHeight w-14 translate-y-12  justify-center rounded-3xl bg-lightGrey">
              <motion.img
                src="/assets/reacteurLogo.jpeg"
                className=" h-reacteurHeight my-auto w-8 rounded-full "
                animate={{
                  scale: [0, 1.2, 1],
                }}
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              />
            </div>
          </motion.div>
          <motion.div
            className=" relative flex w-5/12 flex-col items-start gap-y-3 rounded-md bg-lightGrey p-3 "
            variants={divJourneyVariants}
            whileInView="leftVisible"
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h2 className=" text-xl font-semibold">Programming Training</h2>

            <p className="text-sm">
              After gaining knowledge in HTML, CSS, and JavaScript, I reached a
              point where I felt stuck. I didn't know which framework to learn
              or how the back-end and a database worked. After some research, I
              decided to self-fund an intensive 2-month training.
            </p>
            <p className="text-sm">
              During this training, I learned to use NodeJS, React, and React
              Native. I acquired skills in installing packages, using the
              terminal, and all those things that used to intimidate me when I
              didn't know them.
            </p>
            <p className="text-sm">
              What also motivated me to pursue this training is that, after
              completing a 6-month internship in your company, I will be able to
              obtain an RNCP qualification equivalent to a bachelor's degree,
              providing me with credibility in the professional world.
            </p>

            <p className="absolute -right-48 top-3 text-lightGrey">
              Oct - 2023
            </p>

            <FontAwesomeIcon
              icon="fa-solid fa-play"
              style={{ color: "#D3D3D3" }}
              className="absolute -right-2 top-4"
            />
          </motion.div>
        </article>

        <article className="flex w-5/12 flex-col items-end">
          <motion.div
            animate={{
              scale: [0, 1.2, 1],
            }}
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="  z-10 flex w-full justify-center "
            viewport={{ once: true }}
          >
            <div className=" flex h-logoTimelineHeight w-14 translate-y-12 justify-center rounded-3xl bg-lightGrey">
              <motion.img
                src="/assets/interrogation.png"
                className="z-10 my-auto h-logoTitleProjectHeight w-10  "
                animate={{
                  scale: [0, 1.2, 1],
                }}
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              />
            </div>
          </motion.div>
          <motion.div
            className="relative flex w-5/12 flex-col items-start gap-y-3 rounded-md bg-lightGrey p-3"
            variants={divJourneyVariants}
            whileInView="rightVisible"
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h2 className=" text-xl font-semibold">What's next ?</h2>
            <p className="text-sm">
              Now that I've acquired a foundation of skills and a new way of
              thinking, I'm ready to enter the world of development to gain new
              skills and enhance my stack.
            </p>
            <p className="text-lm font-semibold">
              On my way to new challenges!
            </p>

            <p className="absolute -left-48 top-3 text-lightGrey">Date.now()</p>
            <FontAwesomeIcon
              icon="fa-solid fa-play"
              style={{ color: "#D3D3D3" }}
              className="absolute -left-2 top-4 rotate-180"
            />
          </motion.div>
        </article>
      </section>
    </main>
  );
};

export default Journey;
