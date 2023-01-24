
require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./Routes/routes");

const PORT = process.env.PORT || 8080;

require("./Config/config");

app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));


app.use("/api", router)

// const port = 8080;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));


// "jest": "^29.3.1",
// "test": "react-scripts test",
