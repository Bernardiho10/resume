import { useState, createContext, useMemo } from "react";
import { projectsData } from "../data/projects";

// Create projects context
export const ProjectsContext = createContext();

// Create the projects context provider
export const ProjectsProvider = (props) => {
  const [projects, setProjects] = useState(projectsData);
  //console.log(projects[0])
  const [searchProject, setSearchProject] = useState("");
  const [selectProject, setSelectProject] = useState("");

  // Search projects by project title
  const searchProjectsByTitle = useMemo(() => {
    return projects.filter((item) => {
      const titleMatch = item.ProjectHeader.title.toLowerCase().includes(searchProject.toLowerCase());
      if (titleMatch || searchProject === "") return item;
      return "";
    });
  }, [projects, searchProject]);


  // Select projects by project category
  const selectProjectsByCategory = projects.filter((item) => {
    
    let category =
      item.ProjectHeader.title.charAt(0).toUpperCase() + item.ProjectHeader.title.slice(1);
    return category.includes(selectProject);
  });

  return (
    <ProjectsContext.Provider
      value={{
        projects,
        setProjects,
        searchProject,
        setSearchProject,
        searchProjectsByTitle,
        selectProject,
        setSelectProject,
        selectProjectsByCategory,
      }}
    >
      {props.children}
    </ProjectsContext.Provider>
  );
};
