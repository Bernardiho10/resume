const mongoose = require("mongoose");

const ProjectHeaderSchema = new mongoose.Schema({
  title: String,
  publishDate: String,
  tags: [String],
});

const ProjectDetailsSchema = new mongoose.Schema({
  technologies: [String],
  projectDetailsHeading: String,
  projectDescription: String,
});

const ProjectSchema = new mongoose.Schema({
  id: Number,
  title: String,
  category: String,
  img: String,
  projectHeader: ProjectHeaderSchema,
  projectDetails: ProjectDetailsSchema,
});

const PortfolioSchema = new mongoose.Schema({
  bio: [{ id: Number, content: String }],
  certificates: [{ id: Number, image: String, title: String }],
  clients: [{ id: Number, title: String, img: String, link: String }],
  projects: [ProjectSchema],
});

const Portfolio = mongoose.model("Portfolio", PortfolioSchema);

module.exports = Portfolio;
