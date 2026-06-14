const express =
  require("express");

const router =
  express.Router();

const {
  getCases,
  addCase,
  deleteCase,
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
  "/:id",
  deleteCase
);

module.exports =
  router;