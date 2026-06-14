const mongoose = require("mongoose");

const caseSchema =
  new mongoose.Schema(
    {
      companyId: String,

      caseId: String,

      applicantName: String,

      bank: String,

      productType: String,

      address: String,

      pincode: String,

      contactNo: String,

      verifierName: String,

      status: {
        type: String,
        default: "Pending",
      },

      companyRate: {
        type: Number,
        default: 0,
      },

      verifierRate: {
        type: Number,
        default: 0,
      },

      profit: {
        type: Number,
        default: 0,
      },
    },
    {
      timestamps: true,
    }
  );

module.exports =
  mongoose.model(
    "Case",
    caseSchema
  );