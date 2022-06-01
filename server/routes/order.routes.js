const router = require('express').Router()
const { Order } = require('../db/models')


router.route('/order')
  .post(async (req, res) => {
    const {
      user_id,
      name,
      address,
      phone,
      start_rent,
      end_rent
    } = req.body
    console.log(req.body);
    const newOrder = await Order.create(req.body)
    res.status(200).json(newOrder);

  })

module.exports = router;
