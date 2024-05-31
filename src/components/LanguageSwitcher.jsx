import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGlobe} from "@fortawesome/free-solid-svg-icons";

function LanguageSwitcher() {
  return (
    <button type="button"
            className="py-1 px-3 text-xl text-gray-900 rounded hover:text-slate-800 transition-colors dark:text-gray-300 dark:hover:text-slate-50"
            onClick={() => {}}
    >
      <FontAwesomeIcon icon={faGlobe}/>
    </button>
  );
}

export default LanguageSwitcher;