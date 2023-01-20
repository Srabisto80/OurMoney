require("dotenv").config();

const mongoose = require("mongoose");

const db = "OurMoney";

mongooseBanyan-Labs/company-event-app
  .connect(process.env.MONGODBSERVER, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`Established connection with db - ${db}`))
  .catch((err) => console.log(err));
