const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'order name required']
    },
    email: {
        type: String,
        required: [true, 'email is required']
    },
    userid: {
        type: String,
        required: true
    },
    orderItems: [],
    shippingAddress: {
        type: Object,
        required: true
    },
    orderamount: {
        type: String,
       // required: true
    },
    isDeliverd: {
        type: Boolean,
        default: false
    },
    transactionId: {
        type: String
    }
}, {timestamps: true})

module.exports = mongoose.model("order", orderSchema);