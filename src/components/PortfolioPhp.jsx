// Package import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const PortfolioPhp = ({ isDelayed }) => {
  return (
    <motion.article
      initial={{ opacity: 0, translateY: "100px" }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 1, delay: isDelayed ? 1.5 : 0.2 }}
      viewport={{ once: true }}
      className="flex h-projectDivHeight justify-center"
    >
      <div className="w-96 rounded-md bg-lightGrey py-6 dark:bg-gray-900 dark:text-white  max-[860px]:w-3/5 max-[600px]:w-11/12">
        <img
          src="/assets/portfolio-php.jpg"
          alt="Logo representant un Y"
          className="w-26 mx-auto h-imageProjectHeight"
        />
        <div className="my-6 flex items-center pl-4">
          <img
            src="/assets/Laptop_icon.svg"
            alt="Laptop"
            className="mr-2 h-logoTitleProjectHeight w-12"
          />

          <p className="text-xl font-bold">Portfolio-php</p>
        </div>

        <div>
          <p className="p-4">
            I developed an interactive portfolio for a graphic designer,
            featuring a comprehensive dashboard. This project allows the user to
            create, modify, delete, and restore projects by uploading photos and
            filling in the associated fields.
            <br />
            <br />
            The user can also create categories to organize their projects.
            Additionally, various customization options are available, such as
            modifying the website name, displaying the number of completed
            projects, satisfied clients, and managing the appearance of social
            media links.
            <br />
            <br />
            The code was implemented in PHP and JavaScript, with a MySQL
            database for projects and AWS S3 for image hosting.
          </p>
        </div>

        <div className="gap-x-1g my-6 flex justify-center gap-x-1">
          <a href="https://github.com/Nayoh9?tab=repositories">
            <img
              src="/assets/stackportfolio/github_irxfsl.png"
              alt="chat blanc sur fond noir, logo github"
              className="w-10"
            />
          </a>
          <a href="https://portfolio-php.ovh/dashboard/project.php">
            <FontAwesomeIcon
              icon="fa-solid fa-link"
              className=" h-10 w-10 rotate-12 text-black dark:text-white"
            />
          </a>
        </div>

        <div className="my-6 flex justify-center px-3">
          <a
            href="https://github.com/Nayoh9/portfolio-php"
            className=" transition-all hover:scale-110 hover:font-semibold"
          >
            Front-end - Backend
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-x-2">
          <div className="flex items-center">
            <img
              src="/assets/stackportfolio/php.png"
              alt="Logo php"
              className="w-8"
            />
            <p className="ml-1 text-xs font-semibold">Php</p>
          </div>

          <div className="flex items-center ">
            <img
              src="/assets/stackportfolio/bootstrap.png"
              alt="Deux traits bleus representant le logo Bootstrap"
              className="w-8"
            />
            <p className="ml-1 text-xs font-semibold">Bootstrap</p>
          </div>

          <div className="flex items-center ">
            <img
              src="/assets/stackportfolio/js.png"
              alt="Logo Javascript"
              className="w-8"
            />
            <p className="ml-1 text-xs font-semibold">Javascript</p>
          </div>
          <div className="flex items-center ">
            <img
              src="/assets/stackportfolio/mysql.png"
              alt="logo mysql"
              className="w-8"
            />
            <p className="ml-1 text-xs font-semibold">MySql</p>
          </div>
          <div className="flex items-center ">
            <img
              src="/assets/stackportfolio/awss3.png"
              alt="logo awsS3"
              className="w-8"
            />
            <p className="ml-1 text-xs font-semibold">Aws S3</p>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default PortfolioPhp;
