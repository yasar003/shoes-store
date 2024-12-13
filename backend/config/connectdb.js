const mongoose = require("mongoose");

const connectdb = () => {
  mongoose.connect(process.env.DB_URL).then((con) => {
    console.log("Connected to MongoDB:" + con.connection.host);
  });
};
module.exports = connectdb;
