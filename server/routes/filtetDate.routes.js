const router = require("express").Router();
const { Order } = require("../db/models");

router.route("/allOrder")
.get(async (req, res) => {
  const allOrders = await Order.findAll({
    raw: true,
  });
console.log(allOrders);
  res.json({ allOrders });
});

module.exports = router;
