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

      date: String,

      visitType: {
  type: String,
  default: "Fresh",
},

      verifierName: String,

      status: {
        type: String,
        default: "Pending",
      },
      
paymentStatus: {
  type: String,
  default: "Unpaid",
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
      isDeleted: {
  type: Boolean,
  default: false,
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