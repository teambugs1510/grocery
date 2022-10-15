const express = require('express')
const router = express.Router()
 const Grocery = require('../Model/schema');
var mongoose = require('mongoose');

let arr = []
router.use(express.json())
 
 


router.post('/grocery/add', (req,res) => {
    const add = new Grocery(req.body)
    add.save();
    res.send({add})
})
router.get('/grocery/get', async(req,res) => {
    const add = await Grocery.find()
    res.send(add)
})
router.delete('/grocery/del',async (req,res)=>{
    //console.log(req.body._id)
    const result = await Grocery.findByIdAndDelete(req.body._id)
    res.send({message:'item deleted',data:result})
})
router.put('/grocery/modify',async (req,res)=>{

    var setting = req.body
    const result = await Grocery.findByIdAndUpdate(req.body._id,{$set:setting})
    res.send({message:'item deleted',data:result})
})






module.exports = router;