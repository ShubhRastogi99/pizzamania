const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require("uuid");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const order = require('../models/ordermodel')

router.post("/placeorder", async (req, res) => {
  const { token, Total, currentUser, cartItems } = req.body;
  try {
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });
    const payment = await stripe.paymentIntents.create(
      {
        amount: Total * 100,
        currency: "inr",
        customer: customer.id,
        receipt_email: token.email,
      },
      {
        idempotencyKey: uuidv4(),
      }
    );
    if (payment) {
      const newOrder = await order.create({
        name: currentUser.name,
        email: currentUser.email,
        userid: currentUser._id,
        orderItems: cartItems,
        orderamount: Total,
        shippingAddress: {
          street: token.card.address_line1,
          city: token.card.address_city,
          country: token.card.address_country,
          pincode: token.card.address_zip,
        },
        transactionId: token.id,
        isDeliverd: false
      });
      res.send(newOrder);
    } else {
      res.send("payment failed");
    }
  } catch (err) {
    res.status(400).json({ message: "Something went wrong" });
    console.log(err);
  }
});

router.post("/getuserorder", async (req, res) => {
  const {userid} = req.body
  try{
    const Orders = await order.find({userid})
    res.status(200).send(Orders)
  } catch(err) {
    console.log(err)
    res.status(400).json({
      message: "Something went wrong"
    })
  }
});

router.get("/alluserorder", async (req, res) => {
  try {
    const Orders = await order.find({});
    res.status(200).send(Orders);
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: "Something went wrong",
    });
  }
});

router.post("/deliverorder", async (req, res) => {
  const orderid = req.body.orderid
  try {
    const Order = await order.findOne({_id: orderid});
    Order.isDeliverd = true
    await Order.save()
    res.status(200).send("Order delivered");
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: "Something went wrong",
    });
  }
});

module.exports = router