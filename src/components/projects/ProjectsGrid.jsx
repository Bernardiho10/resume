import React, { useContext, useRef } from "react";
import { FiSearch } from "react-icons/fi";
import ProjectSingle from "./ProjectSingle";
import { ProjectsContext } from "../../context/ProjectsContext";
import ProjectsFilter from "./ProjectsFilter";
import Error from "../../components/Error";

const ProjectsGrid = () => {
  const {
    projects,
    searchProject,
    setSearchProject,
    searchProjectsByTitle,
    selectProject,
    setSelectProject,
    selectProjectsByCategory,
  } = useContext(ProjectsContext);

  const searchInputRef = useRef(null);

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    setSearchProject(searchValue);
    setSelectProject(""); // Clear category selection when searching
  };

  const handleCategorySelect = (value) => {
    setSelectProject(value);
    setSearchProject(""); // Clear search when selecting a category
    if (searchInputRef.current) {
      searchInputRef.current.value = ""; // Clear search input field
    }
  };

  const getProjects = () => {
    if (selectProject) {
      return selectProjectsByCategory;
    } else if (searchProject) {
      return searchProjectsByTitle;
    } else {
      return projects;
    }
  };

  const projectsToDisplay = getProjects();

  return (
    <section className="py-5 sm:py-10 mt-5 sm:mt-10">
      <div className="text-center">
        <p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
          Projects portfolio
        </p>
      </div>

      <div className="mt-10 sm:mt-16">
        <h3 className="font-general-regular text-center text-secondary-dark dark:text-ternary-light text-md sm:text-xl mb-3">
          Search projects by title or filter by category
        </h3>
        <div className="flex justify-between border-b border-primary-light dark:border-secondary-dark pb-3 gap-3">
          <div className="flex justify-between gap-2">
            <span className="hidden sm:block bg-primary-light dark:bg-ternary-dark p-2.5 shadow-sm rounded-xl cursor-pointer">
              <FiSearch className="text-ternary-dark dark:text-ternary-light w-5 h-5"></FiSearch>
            </span>
            <input
              ref={searchInputRef}
              onChange={handleSearch}
              className="font-general-medium pl-3 pr-1 sm:px-4 py-2 border border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
              id="name"
              name="name"
              type="search"
              required=""
              placeholder="Search Projects"
              aria-label="Name"
            />
          </div>

          <ProjectsFilter setSelectProject={handleCategorySelect} />
        </div>
      </div>

      <div className={`mt-6 ${projectsToDisplay.length > 0 ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-10' : 'w-full'}`}>
        {projectsToDisplay.length > 0 ? (
          projectsToDisplay.map((project, id) => (
            <ProjectSingle
              title={project.ProjectHeader.title}
              category={project.ProjectHeader.category}
              image={project.ProjectImages[0].img}
              key={id}
              id={id}
            />
          ))
        ) : (
          <Error type={selectProject ? "category" : searchProject ? "search" : "loading"} />
        )}
      </div>
    </section>
  );
};

export default ProjectsGrid;