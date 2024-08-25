require("dotenv").config();
const express = require("express");
const cors = require('cors');

const connectDB = require("./config/db");
const codeRoutes = require("./routes/codeRoute");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, Welcome to code sharing app");
});

app.use("/", codeRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, async () => {
  try {
    await connectDB;
    console.log("Connected to Database");
  } catch (error) {
    console.log("Failed to connect with Database", error);
  }
  console.log(`Server is up and running at port: ${PORT}`);
});
