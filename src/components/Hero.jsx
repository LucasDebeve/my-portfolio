import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";

function Hero() {
  return (
    <div className="w-sreen h-svh hero-gradient flex flex-col justify-center items-center text-gray-800 dark:text-gray-300">
      <h1 className="text-4xl">Lucas Debeve</h1>
      <p>Hello world !</p>
      <a href="#" className="absolute bottom-8">
        <FontAwesomeIcon icon={faChevronDown} className="mr-5"/>
        En savoir plus
        <FontAwesomeIcon icon={faChevronDown} className="ml-5"/>
      </a>
    </div>
  );
}

export default Hero;