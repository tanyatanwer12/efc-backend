const Company = require(
  "../models/Company"
);

// Get All Companies

const getCompanies = async (
  req,
  res
) => {
  try {
    const companies =
      await Company.find();

    res.json(companies);
  } catch (error) {
    res.status(500).json({
      message:
        "Error fetching companies",
    });
  }
};

// Add Company

const addCompany = async (
  req,
  res
) => {
  try {
    const company =
      await Company.create(
        req.body
      );

    res.status(201).json(
      company
    );
  } catch (error) {
    res.status(500).json({
      message:
        "Error creating company",
    });
  }
};

// Delete Company

const deleteCompany =
  async (req, res) => {
    try {
      await Company.findByIdAndDelete(
        req.params.id
      );

      res.json({
        message:
          "Company Deleted",
      });
    } catch (error) {
      res.status(500).json({
        message:
          "Delete Failed",
      });
    }
  };

module.exports = {
  getCompanies,
  addCompany,
  deleteCompany,
};