const mongoose = require('mongoose')
const grocerySchema = new mongoose.Schema({
     groceryItem:{
        type: String,
        require: true
     },
     isPurchased:{ 
        type:Boolean
     }
})



const Grocery = new mongoose.model('List',grocerySchema);

module.exports = Grocery;