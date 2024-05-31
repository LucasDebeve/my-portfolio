import PropTypes from "prop-types";
import {useTranslation} from "react-i18next";
import "/node_modules/flag-icons/css/flag-icons.min.css";

function LanguageButton({code, name, after}) {

  const {t, i18n} = useTranslation("global");

  const changeLanguage = () => {
    i18n.changeLanguage(code).then(() => {});
    after();
  };

  return (
    <button type="button"
            className="w-full hover:bg-slate-200/50 dark:hover:bg-neutral-700/50 py-2 px-4 rounded-2xl text-left"
            onClick={changeLanguage}
    >
      <span className={`fi fi-${code} mr-2`}></span> {name}
    </button>
  );
}

LanguageButton.propTypes = {
  code: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  after: PropTypes.func,
}

export default LanguageButton;