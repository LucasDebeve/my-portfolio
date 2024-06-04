import PropTypes from "prop-types";
import ProjectCard from "./ProjectCard.jsx";
import {AnimatePresence} from "framer-motion";
import FiltersList from "../Filters/FiltersList.jsx";

function ProjectsList({projects, filters = [], id = "", title = "Projects"}) {

  const allSkills = projects.reduce((acc, project) => {
      project.skills.forEach((skill) => {
        if (!acc.includes(skill)) {
          acc.push(skill);
        }
      });
      return acc;
    }
    , []);

  return (
    <>
      <FiltersList selectFilters={filters} totalFilters={allSkills}/>
      <h2 className="text-2xl scroll-mt-16 text-gray-800 dark:text-gray-300" id={id}>{title}</h2>
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
  id: PropTypes.string,
  title: PropTypes.string,
};

export default ProjectsList;