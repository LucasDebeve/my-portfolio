import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGlobe} from "@fortawesome/free-solid-svg-icons";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import languages from "../locales/languages.json";
import LanguageButton from "./LanguageButton.jsx";
import {useState} from "react";


function LanguageSwitcher() {

  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
  }

  return (
    <div className="relative">
      <button type="button"
              className="py-1 px-3 text-xl text-gray-900 rounded hover:text-slate-800 transition-colors dark:text-gray-300 dark:hover:text-slate-50"
              onClick={toggleLanguageMenu}
      >
        <FontAwesomeIcon icon={faGlobe}/>
      </button>
      {/* dropdown menu*/}
      <div
        className={`${isLanguageMenuOpen ? "block" : "hidden"} absolute bottom-10 -right-12 bg-slate-100/50 w-36 rounded-2xl backdrop-blur-sm drop-shadow-sm border border-b-0 border-slate-50/50 sm:top-12 sm:right-0 sm:bottom-auto sm:w-52 dark:bg-neutral-800/50 dark:text-gray-300 dark:border-slate-50/20`}>
        {languages.map((lang, i) => (
          <LanguageButton key={`${lang}-${i}`} code={lang.code} name={lang.name} after={() => setIsLanguageMenuOpen(false)}/>
        ))
        }
      </div>
    </div>
  );
}

export default LanguageSwitcher;