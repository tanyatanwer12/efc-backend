const mongoose = require("mongoose");

const companySchema =
  new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },

      contactPerson: {
        type: String,
      },

      phone: {
        type: String,
      },
    },
    {
      timestamps: true,
    }
  );

module.exports = mongoose.model(
  "Company",
  companySchema
);