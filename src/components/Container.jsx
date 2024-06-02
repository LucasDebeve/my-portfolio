import PropTypes from "prop-types";

function Container({ children, className = "", id = ""}) {
  return (
    <div className={`container-lg overflow-clip mx-auto px-4 flex flex-col py-8 gap-8 ${className}`} id={id}
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
  id: PropTypes.string,
};

export default Container;