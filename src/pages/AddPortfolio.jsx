import React, { useState } from "react";
import FormInput from "../components/reusable/FormInput";

const AddPortfolio = () => {
  const [formData, setFormData] = useState({
    bio: "",
    certificates: [{ title: "", image: "" }],
    clients: [{ name: "", image: "", link: "" }],
    projects: [
      {
        id: "",
        title: "",
        category: "",
        img: "",
        projectHeader: {
          title: "",
          publishDate: "",
          tags: [],
        },
        projectDetails: {
          technologies: [],
          projectDetailsHeading: "",
          projectDescription: "",
        },
      },
    ],
  });

  const handleProjectChange = (e, projectIndex, field, subField = null) => {
    const updatedProjects = [...formData.projects];

    if (subField) {
      // Special handling for 'tags' field
      if (subField === "tags") {
        const tags = e.target.value.split(",").map((tag) => tag.trim());
        updatedProjects[projectIndex][field][subField] = tags;
      } else {
        updatedProjects[projectIndex][field][subField] = e.target.value;
      }
    } else {
      // Updating a direct field of the project
      updatedProjects[projectIndex][field] = e.target.value;
    }

    setFormData({ ...formData, projects: updatedProjects });
  };

  const handleChange = (e, section, index) => {
    if (index !== null && Array.isArray(formData[section])) {
      const updatedSection = [...formData[section]];
      updatedSection[index] = {
        ...updatedSection[index],
        [e.target.name]: e.target.value,
      };
      setFormData({
        ...formData,
        [section]: updatedSection,
      });
    } else {
      // Handle non-array fields or sections without an index
      setFormData({
        ...formData,
        [section]: e.target.value,
      });
    }
  };

  const handleAddEntry = (section) => {
    const length = formData[section].length;
    const id = length > 0 ? formData[section][length - 1].id + 1 : 1;

    let newEntry;
    if (section === "certificates") {
      newEntry = { id, title: "", image: "" };
    } else if (section === "clients") {
      newEntry = { id, name: "", image: "", link: "" };
    } else if (section === "projects") {
      newEntry = {
        id: "", // Consider how you generate this ID
        title: "",
        category: "",
        img: "",
        projectHeader: {
          title: "",
          publishDate: "",
          tags: [],
        },
        projectDetails: {
          technologies: [],
          projectDetailsHeading: "",
          projectDescription: "",
        },
      };
    }

    const updatedSection = [...formData[section], newEntry];
    setFormData({
      ...formData,
      [section]: updatedSection,
    });
  };

  const handleRemoveEntry = (section, index) => {
    const updatedSection = formData[section].filter((_, i) => i !== index);
    setFormData({
      ...formData,
      [section]: updatedSection,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // submit formData to backend
    console.log("Form Data:", formData);
    const response = await fetch("/portfolio", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        {/* Bio section */}
        <FormInput
          inputLabel="Bio"
          name="bio"
          labelFor="Bio"
          inputType="textarea"
          placeholderText="Bio"
          value={formData.bio}
          onChange={(e) => handleChange(e, "bio")}
        />

        {/* Certificates section */}
        <div className="section-header">
          <h3>Certificates</h3>

          {formData.certificates.map((cert, index) => (
            <div key={cert.id}>
              <FormInput
                inputLabel="Title"
                labelFor={`certificateTitle-${index}`}
                inputType="text"
                inputId={`certificateTitle-${index}`}
                inputName="title"
                placeholderText="Certificate Title"
                value={cert.title}
                onChange={(e) => handleChange(e, "certificates", index)}
              />
              <FormInput
                inputLabel="Image"
                labelFor={`certificateImage-${index}`}
                inputType="text"
                inputId={`certificateImage-${index}`}
                inputName="image"
                placeholderText="Certificate Image URL"
                value={cert.image}
                onChange={(e) => handleChange(e, "certificates", index)}
              />

              <button onClick={() => handleRemoveEntry("certificates", index)}>
                Remove Certificate
              </button>
            </div>
          ))}
        </div>
        <a
          href="#"
          class="btn btn-primary w-100"
          onClick={() => handleAddEntry("certificates")}
        >
          Add Certificate
        </a>
        {/* Other sections */}
        <div className="section-header">
          <h3>Clients</h3>
          {formData.clients.map((client, index) => (
            <div key={client.id}>
              <FormInput
                inputLabel="Client Name"
                labelFor={`name-${index}`}
                inputType="text"
                inputName="name"
                placeholderText="Enter client name"
                value={client.name}
                onChange={(e) => handleChange(e, "clients", index)}
              />
              <FormInput
                inputLabel="Client Image"
                labelFor={`image-${index}`}
                inputType="text"
                inputName="image"
                placeholderText="Enter image URL"
                value={client.image}
                onChange={(e) => handleChange(e, "clients", index)}
              />
              <FormInput
                inputLabel="Client Website"
                labelFor={`link-${index}`}
                inputType="url"
                inputName="link"
                placeholderText="Enter website URL"
                value={client.link}
                onChange={(e) => handleChange(e, "clients", index)}
              />
              <a
                href="#"
                class="btn btn-primary w-100"
                onClick={() => handleRemoveEntry("clients", index)}
              >
                Remove Client
              </a>
            </div>
          ))}
          <a
            href="#"
            class="btn btn-primary w-100"
            onClick={() => handleAddEntry("clients")}
          >
            Add Client
          </a>
        </div>
        <div className="section-header">
          <h3>Projects</h3>
          {formData.projects.map((project, index) => (
            <div key={index}>
              <FormInput
                inputLabel="Project Title"
                inputName="title"
                value={project.title}
                labelFor={`project-${index}`}
                inputType="text"
                placeholderText="Enter Project Title"
                onChange={(e) => handleProjectChange(e, index, "title")}
              />
              {/* Add inputs for other top-level project fields like 'category', 'img' */}

              {/* Project Header Section */}
              <FormInput
                inputLabel="Project Header Title"
                inputName="title"
                placeholderText={"Enter Project Title"}
                labelFor={`project-header-${index}`}
                value={project.projectHeader?.title || ""}
                onChange={(e) =>
                  handleProjectChange(e, index, "projectHeader", "title")
                }
              />
              <FormInput
                inputLabel="Publish Date"
                name="publishDate"
                placeholderText={"Enter Publish Date"}
                value={project.projectHeader?.publishDate || ""}
                onChange={(e) =>
                  handleProjectChange(e, index, "projectHeader", "publishDate")
                }
              />
              {/* Add other inputs for fields within projectHeader */}
              <FormInput
                inputLabel="Tags (comma-separated)"
                inputName="tags"
                inputType="text"
                value={(project.projectHeader?.tags || []).join(", ")}
                onChange={(e) =>
                  handleProjectChange(e, index, "projectHeader", "tags")
                }
                placeholderText="Enter tags, separated by commas"
              />

              {/* Project Details Section */}
              <FormInput
                inputLabel="Project Details Heading"
                name="projectDetailsHeading"
                value={project.projectDetails?.projectDetailsHeading || ""}
                onChange={(e) =>
                  handleProjectChange(
                    e,
                    index,
                    "projectDetails",
                    "projectDetailsHeading"
                  )
                }
              />
              <FormInput
                inputLabel="Project Description"
                name="projectDescription"
                placeholderText="Enter description"
                value={project.projectDetails?.projectDescription || ""}
                onChange={(e) =>
                  handleProjectChange(
                    e,
                    index,
                    "projectDetails",
                    "projectDescription"
                  )
                }
              />

              {/* Technologies Input */}
              <FormInput
                inputLabel="Technologies (comma-separated)"
                name="technologies"
                inputType="text"
                value={project.projectDetails?.technologies.join(", ") || ""}
                onChange={(e) =>
                  handleProjectChange(
                    e,
                    index,
                    "projectDetails",
                    "technologies"
                  )
                }
                placeholderText="Enter technologies, separated by commas"
              />

              {/* Add/Remove Project Button */}
              <button onClick={() => handleRemoveEntry("projects", index)}>
                Remove Project
              </button>
            </div>
          ))}
          <a
            href="#"
            class="btn btn-primary w-100"
            onClick={() => handleAddEntry("projects")}
          >
            Add Project
          </a>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddPortfolio;
