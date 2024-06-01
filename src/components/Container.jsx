import PropTypes from "prop-types";

function Container({ children, className = ""}) {
  return (
    <div className={`container-lg mx-auto px-4 overflow-hidden flex flex-col py-8 gap-8 ${className}`}
         style={{
           transitionProperty: "max-width",
           transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
           transitionDuration: "300ms",
         }}>
    {children}
  </div>);
}

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Container;