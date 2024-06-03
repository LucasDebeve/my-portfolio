import PropTypes from "prop-types";
import {useState} from "react";

function BentoCell({ children, src = "", colSpan = false, rowSpan = false, className = "", id = "", updateFilters }) {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
    updateFilters(children);
  };

  return (
    <div className={`p-4 h-full flex flex-col justify-center items-center gap-2 ${colSpan && "lg:col-span-2"} ${rowSpan && "lg:row-span-2"} ${isSelected ? "bg-neutral-800 text-gray-300 dark:bg-neutral-600" : "bg-white text-gray-800 dark:bg-neutral-800"}  box-border border border-gray-800 lg:hover:bg-neutral-800 lg:hover:text-gray-300 hover:cursor-pointer dark:text-gray-300 dark:border-neutral-900 dark:lg:hover:bg-neutral-600 transition-colors ${className}`}
         id={id}
         onClick={handleClick}
    >
      <img src={src} alt={children} className="w-full h-16 object-contain" />
      {children}
    </div>
  );
}

BentoCell.propTypes = {
  children: PropTypes.node,
  src: PropTypes.string,
  colSpan: PropTypes.bool,
  rowSpan: PropTypes.bool,
  className: PropTypes.string,
  id: PropTypes.string,
  updateFilters: PropTypes.func,
};

export default BentoCell;