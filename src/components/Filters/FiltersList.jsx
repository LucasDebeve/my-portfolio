import PropTypes from "prop-types";
import FilterItem from "./FilterItem.jsx";

function FiltersList({ filters }) {
  return (
    <div className="flex flex-row flex-wrap gap-4">
      {filters.map((filter, index) => {
        return (
          <FilterItem key={`filter-${index}`} filter={filter}/>
        )
      })}
    </div>
  );
}

FiltersList.propTypes = {
  filters: PropTypes.array,
};

export default FiltersList;