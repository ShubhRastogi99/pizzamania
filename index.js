const express = require("express");
const morgan = require('morgan');
const dotenv = require("dotenv");
const path = require("path")
const connectDB = require("./config/db");
require('colors');

const app = express()
dotenv.config();
connectDB();
app.use(express.json())
app.use(morgan('dev'))

app.use('/api/pizzas', require('./routes/pizzaRoute'));
app.use('/api/user', require('./routes/userRoutes'));
app.use('/api/orders', require('./routes/orderRoutes'))

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '/client/build')))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    })
} else {
    app.get("/", (req, res) => {
      res.send("shubh");
    });
}

const PORT = process.env.PORT || 8080;


app.listen(PORT, () => {
    console.log("SERVER IS RUNNING")
})