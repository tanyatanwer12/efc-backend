const Case =
  require("../models/Case");

// GET ALL CASES

const getCases = async (
  req,
  res
) => {
  try {
    const cases =
      await Case.find();

    res.json(cases);
  } catch (error) {
    res.status(500).json({
      message:
        "Error fetching cases",
    });
  }
};

// ADD CASE

const addCase = async (
  req,
  res
) => {
  try {
    const newCase =
      await Case.create(
        req.body
      );

    res.status(201).json(
      newCase
    );
  } catch (error) {
    res.status(500).json({
      message:
        "Error creating case",
    });
  }
};

// DELETE CASE

const deleteCase =
  async (req, res) => {
    try {
      await Case.findByIdAndDelete(
        req.params.id
      );

      res.json({
        message:
          "Case Deleted",
      });
    } catch (error) {
      res.status(500).json({
        message:
          "Delete Failed",
      });
    }
  };

// UPDATE CASE

const updateCase =
  async (req, res) => {
    try {
      const updatedCase =
        await Case.findByIdAndUpdate(
          req.params.id,
          req.body,
          {
            new: true,
          }
        );

      res.json(
        updatedCase
      );
    } catch (error) {
      res.status(500).json({
        message:
          "Update Failed",
      });
    }
  };

module.exports = {
  getCases,
  addCase,
  deleteCase,
  updateCase,
};