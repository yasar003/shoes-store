const ordermodel = require("../models/ordermodel");

exports.createorder = async (req, res, next) => {
  const cartitems = req.body;
  const amount = Number(
    cartitems.reduce((acc, item) => acc + item.product.newprice * item.qty, 0)
  ).toFixed(2);
  console.log(amount);
  const status = "pending";
  const order = await ordermodel.create({ cartitems, amount, status });
  res.json({
    success: true,
    order,
  });
};
