const express = require("express");
const { getproducts, getsingleproduct } = require("../controllers/productcon");
const router = express.Router();

router.route("/products").get(getproducts);
router.route("/product/:id").get(getsingleproduct);

module.exports = router;
