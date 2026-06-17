const express =
  require("express");

const router =
  express.Router();

const {
  getCases,
  addCase,
  deleteCase,
  bulkDeleteCases,
  updateCase,
} = require(
  "../controllers/caseController"
);

router.get(
  "/",
  getCases
);

router.post(
  "/",
  addCase
);

router.put(
  "/:id",
  updateCase
);

router.delete(
  "/bulk-delete",
  bulkDeleteCases
);

router.delete(
  "/:id",
  deleteCase
);

module.exports =
  router;