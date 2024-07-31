import useThemeSwitcher from "../../hooks/useThemeSwitcher";
import { FiArrowDownCircle } from "react-icons/fi";
import { motion } from "framer-motion";
import profileImage from "../../images/ben_removebg.png";
import { Typewriter } from 'react-simple-typewriter';


const AppBanner = () => {
  const [activeTheme] = useThemeSwitcher();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
      className="flex items-center justify-center mt-12 md:mt-2"
    >
      <div className="w-full text-center md:w-1/3">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.1,
          }}
          className="font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center text-ternary-dark dark:text-primary-light uppercase"
        >
          Bernard Oko
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.2,
          }}
          className="font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center leading-normal text-gray-500 dark:text-gray-200"
        >
          <Typewriter
            words={['Hello, welcome to my portfolio! Be blessed']}
            loop={1}
            cursor
            cursorStyle='_'
            typeSpeed={60}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.3,
          }}
          className="flex justify-center mt-6"
        >
          <a
            download="Bernard-Resume-May2024.doc"
            href="/files/Bernard-Resume-May2024.doc"
            className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
            aria-label="Download Resume"
          >
            <FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sm:w-6 sm:h-6 duration-100" />
            <span className="text-sm sm:text-lg font-general-medium duration-100">
              Download CV
            </span>
          </a>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -180 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
        className="w-full sm:w-2/3 text-center mt-8 sm:mt-0"
      >
        <img src={profileImage} className="rounded-lg mx-auto" alt="Profile" />
      </motion.div>
    </motion.section>
  );
};

export default AppBanner;
