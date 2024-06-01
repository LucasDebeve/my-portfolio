import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";
import {motion} from "framer-motion";

function Hero() {

  const animeVariants = {
    hiddenTitle: {
      opacity: 0,
      x: 100
    },
    hiddenSubs: {
      opacity: 0,
      x: -50
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <div
      className="w-sreen h-svh hero-gradient flex flex-col justify-center items-center text-gray-800 dark:text-gray-300">
      <motion.h1
        className="text-4xl"
        variants={animeVariants}
        initial="hiddenTitle"
        whileInView={"visible"}
        transition={{duration: 1}}
        viewport={{once: true}}
      >
        Lucas Debeve
      </motion.h1>
      <motion.p
        variants={animeVariants}
        initial="hiddenSubs"
        whileInView={"visible"}
        transition={{duration: 1}}
        viewport={{once: true}}
      >
        Hello world !
      </motion.p>
      <a href="#" className="absolute bottom-8 animate-bounce">
        <FontAwesomeIcon icon={faChevronDown} className="mr-5"/>
        En savoir plus
        <FontAwesomeIcon icon={faChevronDown} className="ml-5"/>
      </a>
    </div>
  );
}

export default Hero;