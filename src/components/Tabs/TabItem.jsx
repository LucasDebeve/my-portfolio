import PropTypes from "prop-types";
import {motion} from "framer-motion";

function TabItem({ active = false, children, goTo}) {
  return (
    <div
      className={`flex-1 pb-1 border-b text-center text-gray-800 dark:text-gray-300 ${active ? "border-gray-800 dark:border-gray-300" : "text-gray-500 border-gray-400 dark:border-gray-600"} hover:border-gray-500 dark:hover:border-gray-400 hover:cursor-pointer transition-colors`}
      onClick={goTo}
    >
      {children}
    </div>);
}

TabItem.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  goTo: PropTypes.func,
};

export default TabItem;