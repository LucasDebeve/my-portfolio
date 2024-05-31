import PropTypes from "prop-types";

function NavButton({children, link}) {
  return (
    <li><a href={link}
           className="mx-3 my-1 text-gray-800 transition-colors hover:text-black hover:cursor-pointer dark:text-gray-300 dark:hover:text-slate-50">{children}</a>
    </li>);

}

PropTypes.propTypes = {
  children: PropTypes.node,
  link: PropTypes.string,
};

PropTypes.defaultProps = {
  children: "Home",
  link: "#",
}
export default NavButton;