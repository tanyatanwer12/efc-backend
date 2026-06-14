const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const companyRoutes = require("./routes/companyRoutes");
const caseRoutes = require("./routes/caseRoutes");

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use(
  "/api/auth",
  authRoutes
);

app.use(
  "/api/companies",
  companyRoutes
);

app.use(
  "/api/cases",
  caseRoutes
);
app.get("/", (req, res) => {
  res.send("EFC Backend Running...");
});

const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});