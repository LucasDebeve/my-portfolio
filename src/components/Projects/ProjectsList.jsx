import PropTypes from "prop-types";
import ProjectCard from "./ProjectCard.jsx";
import {AnimatePresence} from "framer-motion";
import FiltersList from "../Filters/FiltersList.jsx";

function ProjectsList({projects, filters = []}) {

  return (
    <>
      <FiltersList filters={filters} />
      <div className="flex flex-col gap-8">
        {projects.map((project, index) => {
          return (
            <AnimatePresence key={index}>
              {(filters.length === 0 || project.skills.some((skill) => filters.includes(skill))) && (
                <ProjectCard project={project}/>
              )}
            </AnimatePresence>
          );
        })}
      </div>
    </>
  );
}

ProjectsList.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({
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
  })).isRequired,
  filters: PropTypes.arrayOf(PropTypes.string),
};

export default ProjectsList;