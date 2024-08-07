// Package import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const ScansipProject = ({ isDelayed }) => {
  return (
    <motion.article
      initial={{ opacity: 0, translateY: "100px" }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 1, delay: isDelayed ? 1 : 0.2 }}
      viewport={{ once: true }}
      className="flex h-projectDivHeight justify-center"
    >
      <div className="w-96 rounded-md bg-lightGrey py-6 dark:bg-gray-900 dark:text-white  max-[860px]:w-3/5 max-[600px]:w-11/12">
        <img
          src="/assets/scansip.svg"
          alt="Scan Sip écrit en blanc et vert sur fond noir"
          className="w-26 mx-auto h-imageProjectHeight"
        />
        <div className="my-6 flex items-center pl-4">
          <img
            src="/assets/sandwich-svgrepo-com.svg"
            alt="Sandwich"
            className="mr-2  h-logoTitleProjectHeight w-10"
          />

          <p className="text-xl font-bold">Scan Sip</p>
        </div>

        <div>
          <p className="p-4">
            This web application offers a comprehensive management platform for
            restaurants, designed to be accessed through mobile devices for
            clients and tablets for administrators.
            <br />
            <br />
            It enables restaurant owners (on the admin side) to create and add
            their own products to the menu. Customers can easily browse the
            menu, select products, add them to their cart, and securely complete
            the payment through Stripe (spam '42' to complete the fields.).
            <br />
            <br />
            Upon finalizing the order, customers can conveniently retrieve their
            invoice in PDF format. On the admin side, the interface provides
            efficient order management, offering a complete view of
            transactions.
          </p>
        </div>

        <div className="my-6 flex justify-center gap-x-1">
          <a href="https://github.com/Nayoh9?tab=repositories">
            <img
              src="/assets/stackportfolio/github_irxfsl.png"
              alt="chat blanc sur fond noir, logo github"
              className="w-10"
            />
          </a>
          <a href="https://scansip.netlify.app/">
            <FontAwesomeIcon
              icon="fa-solid fa-link"
              className=" h-10 w-10 rotate-12 text-black dark:text-white"
            />
          </a>
          <a href="https://scansip.netlify.app/admin/signin">
            <FontAwesomeIcon
              icon="fa-solid fa-link"
              className=" h-10 w-10 rotate-12 text-black dark:text-white"
            />
          </a>
        </div>

        <div className="my-6 flex justify-center gap-x-4 px-5">
          <a
            href="https://github.com/ScanSip-Project-Team/scansip-frontend"
            className=" transition-all hover:scale-110 hover:font-semibold"
          >
            Front (client)
          </a>
          <a
            href="https://github.com/ScanSip-Project-Team/scansip-admin"
            className=" transition-all hover:scale-110 hover:font-semibold"
          >
            Front (admin)
          </a>
          <a
            href="https://github.com/ScanSip-Project-Team/scansip-backend"
            className=" transition-all hover:scale-110 hover:font-semibold"
          >
            Back-end
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-x-2">
          <div className="flex items-center">
            <img
              src="/assets/stackportfolio/reactjs-19291084.png"
              alt="Logo react"
              className="w-8"
            />
            <p className="ml-1 text-xs font-semibold">React</p>
          </div>
          <div className="flex items-center">
            <img
              src="/assets/stackportfolio/express.png"
              alt="Lettre E et X represantant express.js"
              className="w-8"
            />
            <p className="ml-1 text-xs font-semibold">ExpressJS</p>
          </div>
          <div className="flex items-center ">
            <img
              src="/assets/stackportfolio/nodejs-d83eb6dd.png"
              alt="symbole node JS écrit en vert"
              className="w-8"
            />
            <p className="ml-1 text-xs font-semibold">NodeJS</p>
          </div>

          <div className="flex items-center ">
            <img
              src="/assets/stackportfolio/mongodb-54000b2b.png"
              alt="une feuille au millieu d'un écusson representant le logo mongoDB"
              className="w-8"
            />
            <p className="ml-1 text-xs font-semibold">MongoDB</p>
          </div>

          <div className="flex items-center ">
            <img
              src="/assets/stackportfolio/tailwind-6ece120d.png"
              alt="Deux traits bleus ondulés representant le logo tailwind"
              className="w-8"
            />
            <p className="ml-1 text-xs font-semibold">Tailwind</p>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default ScansipProject;
