import PropTypes from "prop-types";

function FilterItem({ filter, size = "text-sm" }) {
  return (
    <div className={`bg-gray-300 text-gray-800 ${size} dark:bg-neutral-800 dark:text-gray-300 py-1 px-4 rounded-full whitespace-nowrap`}>
      {filter}
    </div>
  );
}

FilterItem.propTypes = {
  filter: PropTypes.string,
  size: PropTypes.string,
};

export default FilterItem;