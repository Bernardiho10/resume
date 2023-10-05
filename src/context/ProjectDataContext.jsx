import { useState, createContext, useContext } from "react";
import { projectData as projectDataJson } from "../data/projectData";

export const ProjectDataContext = createContext();

export const useProjectData = () => {
  return useContext(ProjectDataContext);
};

export const ProjectDataProvider = ({ children }) => {
  const [projectData, setProjectData] = useState([]);

  return (
    <ProjectDataContext.Provider value={{ projectData, setProjectData }}>
      {children}
    </ProjectDataContext.Provider>
  );
};
