
require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;

require("./Config/config");

app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));

const Routes = require("./Routes/routes");

Routes(app);

const port = 8080;

app.listen(port, () => console.log('Server is running on port ${PORT}'));


