const express = require("express");
const router = express.Router();
const portfolioController = require("../controllers/portfolioController");

router
  .route("/")
  .get(portfolioController.getPortfolios)
  .patch(portfolioController.updatePortfolio)
  .post(portfolioController.createPortfolio)
  .delete(portfolioController.deletePortfolio);

module.exports = router;
