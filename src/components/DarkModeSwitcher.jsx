import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMoon, faSun} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";

function DarkModeSwitcher() {

  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  const [isDark, setIsDark] = useState(localStorage.theme === 'dark');

  const toggleTheme = () => {
    if (localStorage.theme === 'dark') {
      localStorage.theme = 'light';
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    } else {
      localStorage.theme = 'dark';
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <button type="button"
            className="py-1 px-3 text-xl text-gray-900 rounded hover:text-slate-800 transition-colors dark:text-gray-300 dark:hover:text-slate-50"
            onClick={toggleTheme}
    >
      <FontAwesomeIcon icon={isDark ? faSun : faMoon}/>
    </button>
  );
}

export default DarkModeSwitcher;