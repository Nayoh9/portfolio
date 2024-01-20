// Package import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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
  const [datesBelow, setDatesBelow] = useState(false);

  const checkWindow = () => {
    if (window.innerWidth <= 600) {
      setDatesBelow(true);
    } else {
      setDatesBelow(false);
    }
  };

  window.onresize = checkWindow;

  return (
    <main className="mb-28 flex flex-col pt-12 font-mont" id="journey">
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="mb-20 text-center text-2xl font-semibold"
      >
        My Journey
      </motion.h1>

      <section className="timeline relative flex flex-col items-center gap-y-16 max-[600px]:items-start">
        <article className=" flex w-5/12 flex-col max-[1385px]:w-screen max-[1385px]:px-10 max-[600px]:pl-1 ">
          <motion.div
            whileInView={{ opacity: 1, scale: [0, 1.2, 1] }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-[1385px]: z-10 flex w-full justify-center max-[600px]:justify-start"
            viewport={{ once: true }}
          >
            <div className="relative flex h-logoTimelineHeight w-14 translate-y-12  justify-center rounded-3xl bg-lightGrey">
              <motion.img
                src="/assets/kyriad-seeklogo.svg"
                className="w-15 relative z-10"
                whileInView={{ opacity: 1, scale: [0, 1.2, 1] }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              />

              <motion.p
                className=" absolute -right-24 top-3 text-lightGrey  max-[600px]:hidden"
                variants={divJourneyVariants}
                whileInView="leftVisible"
                initial={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                2013 - 2022
              </motion.p>
            </div>
          </motion.div>

          <div className="flex max-[600px]:justify-end">
            <motion.div
              className=" relative flex w-5/12 flex-col items-start gap-y-3 rounded-md bg-lightGrey p-3 max-[600px]:w-9/12  "
              variants={divJourneyVariants}
              whileInView={
                window.innerWidth <= 600 ? "rightVisible" : "leftVisible"
              }
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
              {datesBelow ? (
                <p className="text-sm font-semibold ">2013 - 2022</p>
              ) : (
                ""
              )}

              <FontAwesomeIcon
                icon="fa-solid fa-play"
                style={{ color: "#D3D3D3" }}
                className="absolute -right-2 top-4 max-[600px]:-left-2 max-[600px]:rotate-180"
              />
            </motion.div>
          </div>
        </article>

        <article className="flex w-5/12 flex-col items-end max-[1385px]:w-screen max-[1385px]:px-10 max-[600px]:pl-1">
          <motion.div
            whileInView={{ opacity: 1, scale: [0, 1.2, 1] }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="  z-10 flex w-full justify-center max-[600px]:justify-start "
            viewport={{ once: true }}
          >
            <div className=" flex h-logoTimelineHeight w-14 translate-y-12 justify-center rounded-3xl bg-lightGrey">
              <motion.img
                src="/assets/programmingLaptop.png"
                className="z-10 my-auto h-logoTitleProjectHeight w-10  "
                whileInView={{ opacity: 1, scale: [0, 1.2, 1] }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              />
              <motion.p
                className="absolute -left-24 top-3 text-lightGrey  max-[600px]:hidden"
                variants={divJourneyVariants}
                whileInView="rightVisible"
                initial={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                2022 - 2023
              </motion.p>
            </div>
          </motion.div>
          <motion.div
            className="relative flex w-5/12 flex-col items-start gap-y-3 rounded-md bg-lightGrey p-3 max-[600px]:w-9/12 "
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

            {datesBelow ? (
              <p className="text-sm font-semibold">2022 - 2023</p>
            ) : (
              ""
            )}

            <FontAwesomeIcon
              icon="fa-solid fa-play"
              style={{ color: "#D3D3D3" }}
              className="absolute -left-2 top-4 rotate-180"
            />
          </motion.div>
        </article>

        <article className="flex w-5/12 flex-col max-[1385px]:w-screen max-[1385px]:px-10 max-[600px]:pl-1  ">
          <motion.div
            whileInView={{ opacity: 1, scale: [0, 1.2, 1] }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="  z-10 flex w-full justify-center max-[600px]:justify-start "
            viewport={{ once: true }}
          >
            <div className="flex h-logoTimelineHeight w-14 translate-y-12 justify-center  rounded-3xl bg-lightGrey  ">
              <motion.img
                src="/assets/reacteurLogo.jpeg"
                className=" relative my-auto h-reacteurHeight w-8 rounded-full "
                whileInView={{ opacity: 1, scale: [0, 1.2, 1] }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              />

              <motion.p
                className="customPositionOct absolute -right-28 top-3  text-lightGrey max-[600px]:hidden"
                variants={divJourneyVariants}
                whileInView="leftVisible"
                initial={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Oct 2023 - Dec 2023
              </motion.p>
            </div>
          </motion.div>
          <div className="flex max-[600px]:justify-end">
            <motion.div
              className=" relative flex w-5/12 flex-col items-start gap-y-3 rounded-md bg-lightGrey p-3 max-[600px]:w-9/12 "
              variants={divJourneyVariants}
              whileInView={
                window.innerWidth <= 600 ? "rightVisible" : "leftVisible"
              }
              initial={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h2 className=" text-xl font-semibold">Programming Training</h2>

              <p className="text-sm">
                After gaining knowledge in HTML, CSS, and JavaScript, I reached
                a point where I felt stuck. I didn't know which framework to
                learn or how the back-end and a database worked. After some
                research, I decided to self-fund an intensive 2-month training.
              </p>
              <p className="text-sm">
                During this training, I learned to use NodeJS, React, and React
                Native. I acquired skills in installing packages, using the
                terminal, and all those things that used to intimidate me when I
                didn't know them.
              </p>
              <p className="text-sm">
                What also motivated me to pursue this training is that, after
                completing a 6-month internship in your company, I will be able
                to obtain an RNCP qualification equivalent to a bachelor's
                degree, providing me with credibility in the professional world.
              </p>

              {datesBelow ? (
                <p className="text-sm font-semibold"> Oct 2023 - Dec 2023</p>
              ) : (
                ""
              )}

              <FontAwesomeIcon
                icon="fa-solid fa-play"
                style={{ color: "#D3D3D3" }}
                className="absolute -right-2 top-4 max-[600px]:-left-2 max-[600px]:rotate-180"
              />
            </motion.div>
          </div>
        </article>

        <article className="flex w-5/12 flex-col items-end max-[1385px]:w-screen max-[1385px]:px-10 max-[600px]:pl-1">
          <motion.div
            whileInView={{ opacity: 1, scale: [0, 1.2, 1] }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="  z-10 flex w-full justify-center max-[600px]:justify-start "
            viewport={{ once: true }}
          >
            <div className=" flex h-logoTimelineHeight w-14 translate-y-12 justify-center rounded-3xl bg-lightGrey">
              <motion.img
                src="/assets/interrogation.png"
                className="z-10 my-auto h-logoTitleProjectHeight w-10"
                whileInView={{ opacity: 1, scale: [0, 1.2, 1] }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              />

              <motion.p
                className="customPositionDate absolute top-3 text-lightGrey max-[600px]:hidden"
                variants={divJourneyVariants}
                whileInView="rightVisible"
                initial={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Date()
              </motion.p>
            </div>
          </motion.div>
          <motion.div
            className="relative flex w-5/12 flex-col items-start gap-y-3 rounded-md bg-lightGrey p-3 max-[600px]:w-9/12"
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

            {datesBelow ? <p className="text-sm font-semibold"> Date()</p> : ""}

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
