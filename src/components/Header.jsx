import { useState } from "react";
import { useTranslation } from "react-i18next";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import DarkModeSwitcher from "./DarkModeSwitcher";
import LanguageSwitcher from "./LanguageSwitcher.jsx";
import NavButton from "./NavButton.jsx";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { t } = useTranslation("global");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      document.body.classList.remove("overflow-y-hidden");
    } else {
      document.body.classList.add("overflow-y-hidden");
    }
  };

  // set isMenuOpen to false when the window is resized
  window.addEventListener("resize", () => {
    if (window.innerWidth > 640) {
      setIsMenuOpen(false);
    }
  });

  return (
    <header className="flex justify-center">
      <div
        className="block sm:hidden fixed top-3 right-3 bg-slate-100/50 px-5 py-4 rounded-2xl backdrop-blur-sm drop-shadow-sm border border-b-0 border-slate-50/50 hover:cursor-pointer text-gray-700 hover:text-slate-500 dark:bg-neutral-800/50 dark:border-slate-50/20 dark:text-gray-300 dark:hover:text-slate-50 transition-colors"
        onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} className=" transition-colors text-2xl"/>
      </div>
      <nav
        className={`${isMenuOpen ? "block" : "hidden"} sm:block fixed top-24 bottom-2 w-11/12 sm:bottom-auto sm:top-3 sm:w-auto bg-slate-100/50 px-5 py-2 z-50 rounded-2xl sm:rounded-full backdrop-blur-sm drop-shadow-sm border border-b-0 border-slate-50/50 dark:bg-neutral-800/50 dark:border-slate-50/20`}>
        <ul className="w-full h-full flex flex-col sm:flex-row justify-around sm:justify-center gap-5 items-center">
          <NavButton>{t("header.home")}</NavButton>
          <NavButton link="#timeline">{t("header.xp")}</NavButton>
          <NavButton link="#skills">{t("header.skills")}</NavButton>
          <NavButton link="#projects">{t("header.projects")}</NavButton>
          {isMenuOpen && (
            <li className="flex gap-12">
              <LanguageSwitcher/>
              <DarkModeSwitcher/>
            </li>
          )}
        </ul>
      </nav>
      <div className="hidden sm:flex sm:flex-col-reverse md:flex-row fixed top-3 right-5 gap-3">
        <LanguageSwitcher/>
        <DarkModeSwitcher/>
      </div>
    </header>
  );
}

export default Header;