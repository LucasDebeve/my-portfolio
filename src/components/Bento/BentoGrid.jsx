import PropTypes from 'prop-types';

function BentoGrid({children, className = '', id = '', title = 'Grid'}) {
  return (
    <>
      <h2 className="text-2xl scroll-mt-16 text-gray-800 dark:text-gray-300" id={id}>{title}</h2>
      <div className={`grid lg:grid-flow-col grid-cols-2 sm:grid-cols-3 lg:grid-cols-8 lg:grid-rows-3  select-none ${className}`}>
        {children}
      </div>
    </>
  );
}

BentoGrid.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string,
  title: PropTypes.string,
};

export default BentoGrid;