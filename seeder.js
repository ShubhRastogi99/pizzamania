const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDB = require("./config/db")
const Pizza = require("./models/pizzamodel")
const Pizzas = require("./data/pizza-data")

dotenv.config()
connectDB()

const importData = async () => {
    try {
        await Pizza.deleteMany();
        const sampleData = Pizzas.map(pizza => {return {...pizza}})
        await Pizza.insertMany(sampleData)
        console.log("Data Imported")
        process.exit()
    } catch (error) {
        console.log("error while importing: ", error)
        process.exit(1)
    }
}

const dataDestroy = () => {}

if(process.argv[2] == '-d'){
    dataDestroy();
} else 
    importData();