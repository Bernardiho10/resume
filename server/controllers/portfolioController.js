const Portfolio = require("../models/Porfolio");

// Get all portfolios
const getPortfolios = async (req, res) => {
  try {
    const portfolios = await Portfolio.find().lean();

    if (!portfolios?.length) {
      return res
        .status(200)
        .json({ message: "No Portfolio found! Upload one" });
    }

    res.json(portfolios);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// Create a new portfolio
const createPortfolio = async (req, res) => {
  try {
    const { bio, certificates, clients, projects } = req.body;

    // Validate required fields (example for projects, expand as needed)
    if (!projects || !Array.isArray(projects)) {
      return res.status(400).json({ message: "Projects are required" });
    }

    const newPortfolio = await Portfolio.create({
      bio,
      certificates,
      clients,
      projects,
    });

    res.status(201).json(newPortfolio);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// Update a portfolio
const updatePortfolio = async (req, res) => {
  try {
    const { id } = req.params;
    const { bio, certificates, clients, projects } = req.body;

    if (!id) {
      return res.status(400).json({ message: "Portfolio ID is required" });
    }

    const updatedPortfolio = await Portfolio.findByIdAndUpdate(
      id,
      { bio, certificates, clients, projects },
      { new: true }
    );

    if (!updatedPortfolio) {
      return res.status(404).json({ message: "Portfolio not found" });
    }

    res.json(updatedPortfolio);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete a portfolio
const deletePortfolio = async (req, res) => {
  try {
    const { id } = req.params;

    const portfolio = await Portfolio.findById(id);

    if (!portfolio) {
      return res.status(404).json({ message: "Portfolio not found" });
    }

    const deletedPortfolio = await Portfolio.findByIdAndDelete(id);

    res.json({ message: "Portfolio deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  getPortfolios,
  createPortfolio,
  updatePortfolio,
  deletePortfolio,
};
