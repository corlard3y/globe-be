const express = require('express');
const debug = require('debug')('app:adminRouter')
const {MongoClient} = require('mongodb')



const adminRouter = express.Router()

adminRouter.route('/ ').get((req,res)=>{
    const url = 'mongodb+srv://corlard3y:booktara@cak3s.wuyr0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
})



module.exports  = adminRouter 