import PropTypes from "prop-types";

function Footer({ authorText = "Author"}) {

  const year = new Date().getFullYear();

  return (
    <footer className="pt-16 px-4 pb-4 md:px-32 hero-gradient flex justify-center items-center">
      <div className="flex justify-between flex-1 max-w-screen-lg bg-slate-100/50 px-5 py-4 rounded-full backdrop-blur-sm drop-shadow-sm border border-b-0 border-slate-50/50 dark:bg-neutral-800/50 dark:border-slate-50/20 dark:text-gray-300 transition-colors">
        <p>© {year === 2024 ? "2024" : `2024-${year}`}</p>
        <p>{authorText}</p>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  authorText: PropTypes.string,
};

export default Footer;