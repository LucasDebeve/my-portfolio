import PropTypes from "prop-types";
import {motion} from "framer-motion";

function FilterItem({ filter, size = "text-sm" }) {
  return (
    <motion.div className={`bg-gray-300 text-gray-800 ${size} dark:bg-neutral-800 dark:text-gray-300 py-1 px-4 rounded-full whitespace-nowrap`}
                animate={{ opacity: [0, 1], scale: [0, 1], y: [30, 0] }}
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