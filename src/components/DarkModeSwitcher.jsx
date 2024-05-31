import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMoon} from "@fortawesome/free-solid-svg-icons";

function DarkModeSwitcher() {
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  const toggleTheme = () => {
    if (localStorage.theme === 'dark') {
      localStorage.theme = 'light';
      document.documentElement.classList.remove('dark');
    } else {
      localStorage.theme = 'dark';
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <button type="button"
            className="py-1 px-3 text-xl text-gray-900 rounded hover:text-slate-800 transition-colors dark:text-gray-300 dark:hover:text-slate-50"
            onClick={toggleTheme}
    >
      <FontAwesomeIcon icon={faMoon}/>
    </button>
  );
}

export default DarkModeSwitcher;