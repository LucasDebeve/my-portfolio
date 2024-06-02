import PropTypes from "prop-types";
import FilterItem from "../Filters/FilterItem.jsx";
import {motion, AnimatePresence} from "framer-motion";
import ClickableImage from "./ClickableImage.jsx";

function ProjectCard({project}) {
  const animeVariants = {
    hidden: {
      opacity: 0,
      x: 50,
      transition: {
        duration: 0.3,
      }
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.2,
        duration: 0.5,
      }
    },
  };
  return (
      <motion.div
        className="w-full flex flex-col gap-2 border border-gray-300 rounded-sm text-gray-800 md:flex-row md:h-72"
        variants={animeVariants}
        initial="hidden"
        whileInView="visible"
        exit="hidden"
      >
        <ClickableImage src={project.image} alt={project.title} />
        <div className="w-full flex flex-col p-6 gap-3">
          <div className="flex justify-between">
            <h3 className="text-lg">{project.title}</h3>
            <p className="text-sm text-gray-600">{project.date}</p>
          </div>
          <p className="text-sm">{project.description}</p>
          <div className="flex flex-nowrap gap-5 overflow-hidden">
            {project.skills.map((skill, index) => {
              return (
                <FilterItem key={`${project.title}-skill-${index}`} filter={skill} size="text-xs"/>
              );
            })}
          </div>
          <div className="w-full flex flex-col-reverse gap-2 lg:flex-row-reverse md:flex-1 md:items-end">
            {project.links.map((link, index) => {
                return (
                  <a href={link.url} key={`${project.title}-link-${index}`} target="_blank" rel="noreferrer"
                     className={`w-full h-fit lg:w-auto text-center border py-1 px-6 rounded-sm transition-colors ${link.primary ? (link.disabled ? "bg-neutral-400 text-neutral-500" : "text-gray-300 bg-neutral-700 hover:text-gray-100 hover:bg-neutral-600") : (link.disabled ? "border-neutral-400 text-neutral-400" : "bg-neutral-200 text-neutral-700 border-neutral-700 hover:text-neutral-900 hover:bg-neutral-300")} ${link.disabled && "pointer-events-none"}`}>
                    {link.title}
                  </a>
                );
              }
            )}
          </div>
        </div>
      </motion.div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string,
    date: PropTypes.string,
    links: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      url: PropTypes.string,
      icon: PropTypes.string,
      disabled: PropTypes.bool,
      primary: PropTypes.bool,
    })),
    skills: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default ProjectCard;