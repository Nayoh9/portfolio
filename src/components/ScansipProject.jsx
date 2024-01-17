// Package import
import { motion } from "framer-motion";

const ScansipProject = ({ setIsDelayed, isDelayed }) => {
  return (
    <motion.article
      initial={{ opacity: 0, translateY: "100px" }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 1, delay: isDelayed ? 1 : 0.2 }}
      viewport={{ once: true }}
      className="flex h-projectDivHeight justify-center"
    >
      <div className="w-96 rounded-md bg-lightGrey py-6">
        <img
          src="/assets/scansip.svg"
          alt="Scan Sip écrit en blanc et vert sur fond noir"
          className="w-26 mx-auto h-imageProjectHeight"
        />
        <div className="my-6 flex items-center pl-2">
          <img
            src="/assets/sandwich-svgrepo-com.svg"
            alt="Sandwich"
            className="mr-2  h-logoTitleProjectHeight w-10"
          />

          <p className="text-xl font-bold">Scan Sip</p>
        </div>

        <div>
          <p className="p-2">
            This web application offers a comprehensive management platform for
            restaurants, designed to be accessed through mobile devices for
            clients and tablets for administrators. It enables restaurant owners
            (on the admin side) to create and add their own products to the
            menu. Customers can easily browse the menu, select products, add
            them to their cart, and securely complete the payment through Stripe
            (spam '42' to complete the fields.). Upon finalizing the order,
            customers can conveniently retrieve their invoice in PDF format. On
            the admin side, the interface provides efficient order management,
            offering a complete view of transactions.
          </p>
        </div>

        <div className="my-6 flex justify-center">
          <a href="https://github.com/Nayoh9?tab=repositories" target="blank">
            <img
              src="/assets/stack portfolio/github_irxfsl.png"
              alt="chat blanc sur fond noir, logo github"
              className="w-10"
            />
          </a>
          <a href="https://scansip.netlify.app/" target="blank">
            <img src="/assets/171454_link_icon.png" alt="" className="w-10" />
          </a>
          <a href="https://scansip.netlify.app/admin/signin" target="blank">
            <img src="/assets/171454_link_icon.png" alt="" className="w-10" />
          </a>
        </div>

        <div className="my-6 flex justify-center gap-x-3">
          <a
            href="https://github.com/ScanSip-Project-Team/scansip-frontend"
            target="blank"
            className=" transition-all hover:scale-110 hover:font-semibold"
          >
            Front (client)
          </a>
          <a
            href="https://github.com/ScanSip-Project-Team/scansip-admin"
            target="blank"
            className=" transition-all hover:scale-110 hover:font-semibold"
          >
            Front (admin)
          </a>
          <a
            href="https://github.com/ScanSip-Project-Team/scansip-backend"
            target="blank"
            className=" transition-all hover:scale-110 hover:font-semibold"
          >
            Back-end
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-x-2">
          <div className="flex items-center">
            <img
              src="/assets/stack portfolio/reactjs-19291084.png"
              alt="Logo react"
              className="w-8"
            />
            <p className="ml-1 text-xs font-semibold">React</p>
          </div>
          <div className="flex items-center">
            <img
              src="/assets/stack portfolio/express.png"
              alt="Lettre E et X represantant express.js"
              className="w-8"
            />
            <p className="ml-1 text-xs font-semibold">ExpressJS</p>
          </div>
          <div className="flex items-center ">
            <img
              src="/assets/stack portfolio/nodejs-d83eb6dd.png"
              alt="symbole node JS écrit en vert"
              className="w-8"
            />
            <p className="ml-1 text-xs font-semibold">NodeJS</p>
          </div>

          <div className="flex items-center ">
            <img
              src="/assets/stack portfolio/mongodb-54000b2b.png"
              alt="une feuille au millieu d'un écusson representant le logo mongoDB"
              className="w-8"
            />
            <p className="ml-1 text-xs font-semibold">MongoDB</p>
          </div>

          <div className="flex items-center ">
            <img
              src="/assets/stack portfolio/tailwind-6ece120d.png"
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
