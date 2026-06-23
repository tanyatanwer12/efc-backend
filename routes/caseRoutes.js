const express =
  require("express");

const router =
  express.Router();

const {
  getCases,
  getDeletedCases,
  restoreCase,
  permanentDeleteCase,
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

router.get(
  "/deleted",
  getDeletedCases
);

router.put(
  "/restore/:id",
  restoreCase
);

router.delete(
  "/permanent/:id",
  permanentDeleteCase
);

router.delete(
  "/:id",
  deleteCase
);

module.exports =
  router;