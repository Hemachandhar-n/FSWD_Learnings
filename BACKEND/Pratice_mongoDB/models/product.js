const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    product: { type:String, required:true},
    price: { type:Number, required:true},
    Rating: {type:Number,required: true},
    bonus: { type: Boolean, required: true},
    
},{timestamps:true})

module.exports = mongoose.model("Products", productSchema);