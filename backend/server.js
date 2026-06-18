require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const eventRoutes = require("./routes/eventRoutes");
const studentRoutes = require("./routes/studentRoutes");
const clubRoutes =require("./routes/clubRoutes");
const committeeRoutes =require("./routes/committeeRoutes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/events", eventRoutes);
app.use("/api/students", studentRoutes);

app.use("/api/clubs",clubRoutes);

app.use("/api/committees",committeeRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on ${process.env.PORT}`);
});