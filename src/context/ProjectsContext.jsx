import { useState, createContext, useEffect } from "react";
import db from "../firebase";
import { collection, getDocs } from "firebase/firestore";

// Create projects context
export const ProjectsContext = createContext();

// Create the projects context provider
export const ProjectsProvider = (props) => {
  const [projects, setProjects] = useState([]);
  const [searchProject, setSearchProject] = useState("");
  const [selectProject, setSelectProject] = useState("");

  useEffect(() => {
    const fetchProjectsData = async () => {
      const projectsRef = collection(db, "projects");

      try {
        const snapshot = await getDocs(projectsRef);
        const projectsData = snapshot.docs.map((doc, index) => ({
          id: index,
          title: doc.data().ProjectHeader.title,
          category: doc.data().ProjectHeader.tags,
          img: doc.data().ProjectImages,
          ProjectHeader: doc.data().ProjectHeader,
        }));
        setProjects(projectsData);
      } catch (error) {
        console.error("Error fetching projects data:", error);
      }
    };

    fetchProjectsData();
  }, []);

  // Define variables conditionally based on whether projects data is available
  const searchProjectsByTitle = projects.length
    ? projects.map((item) => {
        const result = item.title
          .toLowerCase()
          .includes(searchProject.toLowerCase())
          ? item.title
          : searchProject === ""
          ? item.title
          : "";
        return result;
      })
    : [];

  const selectProjectsByCategory = projects.length
    ? projects.map((item) => {
        let category =
          item.category.charAt(0).toUpperCase() + item.category.slice(1);
        return category.includes(selectProject);
      })
    : [];

  return (
    <ProjectsContext.Provider
      value={{
        projects,
        setProjects,
        searchProject,
        setSearchProject,
        selectProject,
        setSelectProject,
        searchProjectsByTitle,
        selectProjectsByCategory,
      }}
    >
      {props.children}
    </ProjectsContext.Provider>
  );
};
