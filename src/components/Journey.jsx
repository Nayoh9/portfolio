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

      <section className="timeline relative flex flex-col items-center">
        <article className="flex w-5/12 flex-col pt-20">
          <motion.div
            className=" relative mb-40  flex w-5/12 flex-col items-start bg-lightGrey "
            variants={divJourneyVariants}
            whileInView="leftVisible"
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h2>Zboub</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
              nesciunt quaerat sunt rem dignissimos! Animi doloremque inventore
              provident! Consequatur quam amet facere, modi nam dolorum aut
              suscipit minima ducimus natu Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Numquam, error recusandae provident
              fuga autem corporis laboriosam et repellat reiciendis fugiat?
              Debitis dolore magni aspernatur veritatis ex ab odio tempora modi
              voluptate cupiditate quos alias porro dicta numquam dolorem, odit
              cum beatae facere fugit, dignissimos consequuntur nihil?
              Consequatur veniam quo non.
            </p>
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
            <div className=" flex h-logoTimelineHeight w-14 translate-y-12  justify-center rounded-3xl bg-lightGrey">
              <img
                src="/assets/sandwich-svgrepo-com.svg"
                className="z-10 w-10 "
              />
            </div>
          </motion.div>
          <motion.div
            className="relative flex w-5/12 flex-col bg-lightGrey"
            variants={divJourneyVariants}
            whileInView="rightVisible"
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h2>Zboub</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
              nesciunt quaerat sunt rem dignissimos! Animi doloremque inventore
              provident! Consequatur quam amet facere, modi nam dolorum aut
              suscipit minima ducimus natu Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Numquam, error recusandae provident
              fuga autem corporis laboriosam et repellat reiciendis fugiat?
              Debitis dolore magni aspernatur veritatis ex ab odio tempora modi
              voluptate cupiditate quos alias porro dicta numquam dolorem, odit
              cum beatae facere fugit, dignissimos consequuntur nihil?
              Consequatur veniam quo non.
            </p>

            <p className="absolute -left-48">21/21/2003</p>
          </motion.div>
        </article>
      </section>
    </main>
  );
};

export default Journey;
