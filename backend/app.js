const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");
const connectdb = require("./config/connectdb");
dotenv.config({ path: path.join(__dirname, "config", "config.env") });

const products = require("./routes/products");
const orders = require("./routes/order");

connectdb();
app.use(express.json());
app.use(cors());
app.use("/api/v1/", products);
app.use("/api/v1/", orders);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
