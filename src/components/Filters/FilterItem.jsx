import PropTypes from "prop-types";
import {motion} from "framer-motion";

function FilterItem({ filter, size = "text-sm" }) {
  const animeVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  };

  return (
    <motion.div
      className={`bg-gray-300 text-gray-800 ${size} dark:bg-neutral-800 dark:text-gray-300 py-1 px-4 rounded-full whitespace-nowrap`}
      variants={animeVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      {filter}
    </motion.div>
  );
}

FilterItem.propTypes = {
  filter: PropTypes.string,
  size: PropTypes.string,
};

export default FilterItem;