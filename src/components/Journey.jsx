import { motion } from "framer-motion";

const Journey = () => {
  return (
    <section className=" relative flex   flex-col items-center ">
      <motion.img
        src="src/assets/traitest.png"
        alt=""
        className=" h-timeLineHeight absolute left-1/2 right-1/2 w-10 "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        viewport={{ once: true }}
      />
      <article className=" flex w-9/12 flex-col items-end  ">
        <div className="mb-20 flex w-1/2 flex-col items-start">
          <h2>Zboub</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
            nesciunt quaerat sunt rem dignissimos! Animi doloremque inventore
            provident! Consequatur quam amet facere, modi nam dolorum aut
            suscipit minima ducimus natus.
          </p>
        </div>
      </article>

      <article className=" flex w-9/12 flex-col  ">
        <div className="mb-20 flex w-1/2 flex-col items-start">
          <h2>Zboub</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
            nesciunt quaerat sunt rem dignissimos! Animi doloremque inventore
            provident! Consequatur quam amet facere, modi nam dolorum aut
            suscipit minima ducimus natus.
          </p>
        </div>
      </article>
    </section>
  );
};

export default Journey;
