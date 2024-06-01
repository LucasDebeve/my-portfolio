import PropTypes from "prop-types";

function Columns({ children, className = "" }) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-800 dark:text-gray-300${className}`}>
      {children}
    </div>
  );
}

Columns.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default Columns;