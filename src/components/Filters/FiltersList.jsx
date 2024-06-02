import PropTypes from "prop-types";
import FilterItem from "./FilterItem.jsx";
import {AnimatePresence} from "framer-motion";

function FiltersList({ filters }) {
  return (
    <div className="flex flex-row flex-wrap gap-4 h-2">
      <AnimatePresence>
        {filters.map((filter, index) => {
          return (
            <FilterItem key={`filter-${index}`} filter={filter}/>
          )
        })}
      </AnimatePresence>
    </div>
  );
}

FiltersList.propTypes = {
  filters: PropTypes.array,
};

export default FiltersList;