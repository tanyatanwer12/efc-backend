const express = require(
  "express"
);

const router =
  express.Router();

const {
  getCompanies,
  addCompany,
  deleteCompany,
} = require(
  "../controllers/companyController"
);

router.get(
  "/",
  getCompanies
);

router.post(
  "/",
  addCompany
);

router.delete(
  "/:id",
  deleteCompany
);

module.exports = router;