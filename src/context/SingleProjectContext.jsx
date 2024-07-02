import { useState, createContext } from "react";
import { singleProjectData as singleProjectDataJson } from "../data/singleProjectData";
import { projectsData } from "../data/projects";

const SingleProjectContext = createContext();

export const SingleProjectProvider = ({ children }) => {
  const [singleProjectData, setSingleProjectData] = useState(
    projectsData
  );

  return (
    <SingleProjectContext.Provider
      value={{ singleProjectData, setSingleProjectData }}
    >
      {children}
    </SingleProjectContext.Provider>
  );
};

export default SingleProjectContext;
