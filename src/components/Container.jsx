import PropTypes from "prop-types";

function Container({ children }) {
  return (
    <div className="container-lg mx-auto px-4 overflow-hidden flex flex-col py-8 gap-8"
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
};

export default Container;