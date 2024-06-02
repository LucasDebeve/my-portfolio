import PropTypes from "prop-types";
import ProjectCard from "./ProjectCard.jsx";
import {useEffect, useState} from "react";
import {AnimatePresence} from "framer-motion";

function ProjectsList({projects, filters = []}) {

  const [projectsList, setProjectsList] = useState(projects);

  // useEffect(() => {
  //   if (filters.length > 0) {
  //     setProjectsList(projects.filter((project) => {
  //       return project.skills.some((skill) => filters.includes(skill));
  //     }));
  //   } else {
  //     setProjectsList(projects);
  //   }
  // }, [filters, projects]);

  return (
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