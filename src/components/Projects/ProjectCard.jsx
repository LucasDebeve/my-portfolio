import PropTypes from "prop-types";
import FilterItem from "../Filters/FilterItem.jsx";
import {motion} from "framer-motion";

function ProjectCard({ project }) {
  return (
    <div className="w-full flex flex-col gap-2 border border-gray-300 rounded-sm text-gray-800">
      <img src={project.image} alt={project.title} className="w-full h-32"/>
      <div className="w-full flex flex-col p-6 gap-3">
        <div className="flex justify-between">
          <h3 className="text-lg">{project.title}</h3>
          <p className="text-sm text-gray-600">{project.date}</p>
        </div>
        <p className="text-sm">{project.description}</p>
        <div className="w-full inline-flex flex-nowrap gap-3">
          {project.skills.map((skill, index) => {
            return (
              <FilterItem key={`${project.title}-skill-${index}`} filter={skill} size="text-xs" />
            );
          })}
        </div>
        <div className="w-full flex flex-col-reverse gap-2">
          {project.links.map((link, index) => {
            return (
              <a href={link.url} key={`${project.title}-link-${index}`} className={`w-full text-center p-1 rounded-sm transition-colors ${ link.primary ? "text-gray-300 bg-neutral-700 hover:text-gray-100 hover:bg-neutral-600" : "bg-neutral-200 text-neutral-700 border border-neutral-700 hover:text-neutral-900 hover:bg-neutral-300"}`}>
                {link.title}
              </a>
            );
          }
          )}
        </div>
      </div>
    </div>
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