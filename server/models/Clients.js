const mongoose = require("mongoose");
const autoIncrement = require("mongoose-sequence");

const clientsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    weblink: {
      type: String,
    },
    address: {
      type: String,
    },
    startDate: {
      type: String,
    },
    endDate: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Clients", clientsSchema);
