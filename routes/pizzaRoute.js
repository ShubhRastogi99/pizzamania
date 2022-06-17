const express = require('express');
const pizzaModel = require('../models/pizzamodel')

const router = express.Router();

router.get("/getPizzas", async (req, res) => {
    try {
        const pizzas = await pizzaModel.find({});
        res.send(pizzas);
    } catch(err) {
        res.json({message: err});
    }
});

router.post("/addPizza", async (req, res) => {
    const {pizza} = req.body
    console.log(pizza)
  try {
    const newPizza = new pizzaModel({
        name: pizza.name,
        image: pizza.image, 
        varients:['small', 'medium', 'large'],
        description: pizza.description,
        category: pizza.category,
        prices: [pizza.prices]
    })
    await newPizza.save()
    res.status(200).send("New Pizza Added")
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/getpizzabyid", async (req, res) => {
    const pizzaId = req.body.pizzaId
  try {
    const pizza = await pizzaModel.findOne({_id: pizzaId});
    res.send(pizza);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/updatepizza", async(req, res) => {
    const updatedpizza = req.body.updatedpizza
    console.log(updatedpizza)
    try {
        const pizza = await pizzaModel.findOne({_id: updatedpizza._id})
        pizza.name = updatedpizza.name,
        pizza.description = updatedpizza.description,
        pizza.image = updatedpizza.image,
        pizza.category = updatedpizza.category,
        pizza.prices = [updatedpizza.prices]
        await pizza.save()
        res.status(200).send("Pizza Updated Successfully")
    } catch(err){
        res.json({ message: err });
    }
})

router.post("/deletepizza", async (req, res) => {
    const {pizzaId} = req.body
    try {
        await pizzaModel.findOneAndDelete({_id: pizzaId})
        res.status(200).send("deleted")
    } catch(err){
        res.json({ message: err });
    }
});

module.exports = router;
