import ProjectGallery from "../components/projects/ProjectGallery";
import ProjectHeader from "../components/projects/ProjectHeader";
import ProjectInfo from "../components/projects/ProjectInfo";
import { ProjectDataContext } from "../context/ProjectDataContext";
import { motion } from "framer-motion";

const ProjectSingle = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.6,
        delay: 0.15,
      }}
      className="container mx-auto mt-5 sm:mt-10"
    >
      <ProjectDataContext>
        <ProjectHeader />
        <ProjectGallery />
        <ProjectInfo />
      </ProjectDataContext>
    </motion.div>
  );
};

export default ProjectSingle;
