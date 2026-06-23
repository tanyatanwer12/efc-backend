const Case =
  require("../models/Case");

// GET ALL CASES

const getCases = async (
  req,
  res
) => {
  try {
    const cases =
  await Case.find({
    isDeleted: false,
  });

    res.json(cases);
  } catch (error) {
    res.status(500).json({
      message:
        "Error fetching cases",
    });
  }
};

// GET DELETED CASES

const getDeletedCases =
  async (req, res) => {
    try {

      const cases =
        await Case.find({
          isDeleted: true,
        });

      res.json(cases);

    } catch (error) {

      res.status(500).json({
        message:
          "Error fetching deleted cases",
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

      console.log(
        "DELETE REQUEST RECEIVED:",
        req.params.id
      );

      const result =
        await Case.findByIdAndUpdate(
          req.params.id,
          {
            isDeleted: true,
          },
          {
            new: true,
          }
        );

      console.log(
        "UPDATED CASE:",
        result
      );

      res.json({
        message:
          "Case Deleted",
      });

    } catch (error) {

      console.log(
        "DELETE ERROR:",
        error
      );

      res.status(500).json({
        message:
          "Delete Failed",
      });

    }
  };

  // BULK DELETE CASES
  const bulkDeleteCases = async (
  req,
  res
) => {
  try {
    console.log("BODY:", req.body);

    const { ids } = req.body;

    console.log("IDS:", ids);

    const result =
      await Case.updateMany(
  {
    _id: {
      $in: ids,
    },
  },
  {
    isDeleted: true,
  }
);

    console.log(
      "DELETE RESULT:",
      result
    );

    res.json({
      message: "Success",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message:
        "Bulk delete failed",
    });
  }
};

// RESTORE CASE

const restoreCase =
  async (req, res) => {

    try {

      await Case.findByIdAndUpdate(
        req.params.id,
        {
          isDeleted: false,
        }
      );

      res.json({
        message:
          "Case Restored",
      });

    } catch (error) {

      res.status(500).json({
        message:
          "Restore Failed",
      });

    }

  };

  // PERMANENT DELETE

const permanentDeleteCase =
  async (req, res) => {

    try {

      await Case.findByIdAndDelete(
        req.params.id
      );

      res.json({
        message:
          "Case Permanently Deleted",
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
  getDeletedCases,
  restoreCase,
  permanentDeleteCase,
  addCase,
  deleteCase,
  bulkDeleteCases,
  updateCase,
};