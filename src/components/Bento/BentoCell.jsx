import PropTypes from "prop-types";
import {useState} from "react";

function BentoCell({ children, src = "", colSpan = false, rowSpan = false, className = "", id = "" }) {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div className={`p-4 h-full flex flex-col justify-center items-center gap-2 ${colSpan && "lg:col-span-2"} ${rowSpan && "lg:row-span-2"} ${isSelected ? "bg-neutral-800 text-gray-300 dark:bg-gray-200 dark:text-neutral-800" : "bg-white text-gray-800"}  box-border border border-gray-800 hover:bg-neutral-800 hover:text-gray-300 hover:cursor-pointer dark:bg-neutral-800 dark:text-gray-300 dark:border-neutral-900 dark:hover:bg-gray-200 dark:hover:text-neutral-800 transition-colors ${className}`}
         id={id}
         onClick={() => setIsSelected(!isSelected)}
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
};

export default BentoCell;