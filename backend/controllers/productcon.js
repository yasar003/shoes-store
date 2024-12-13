const productmodel = require("../models/productmodel");

exports.getproducts = async (req, res, next) => {
  const products = await productmodel.find({});
  res.json({
    success: true,
    products,
  });
};
exports.getsingleproduct = async (req, res, next) => {
  try {
    const products = await productmodel.findById(req.params.id);
    res.json({
      success: true,
      products,
    });
  } catch (err) {
    return res.status(404).json({ success: false, message: "Server Error" });
  }
};
