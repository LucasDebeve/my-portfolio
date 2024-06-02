import PropTypes from "prop-types";

function FilterItem({ filter }) {
  return (
    <div className="bg-gray-300 text-gray-800 text-sm dark:bg-neutral-800 dark:text-gray-300 py-1 px-4 rounded-full">
      {filter}
    </div>
  );
}

FilterItem.propTypes = {
  filter: PropTypes.string,
};

export default FilterItem;