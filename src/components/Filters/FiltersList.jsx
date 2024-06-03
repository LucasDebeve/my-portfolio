import PropTypes from "prop-types";
import FilterItem from "./FilterItem.jsx";
import {AnimatePresence} from "framer-motion";

function FiltersList({ selectFilters = [], totalFilters = []}) {
  return (
    <div className="flex flex-row flex-wrap items-start gap-4 min-h-10">
        {totalFilters.map((filter, index) => {
          return (
            <AnimatePresence key={`filter-${index}`}>
              {selectFilters.includes(filter) && (<FilterItem filter={filter} />)}
            </AnimatePresence>
          )
        })}
    </div>
  );
}

FiltersList.propTypes = {
  selectFilters: PropTypes.array,
  totalFilters: PropTypes.array,
};

export default FiltersList;