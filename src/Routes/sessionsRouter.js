
const express = require('express');

const sessionsRouter = express.Router()

sessionsRouter.route('/').get((req,res)=>{
    res.render('sessions', {sessions: [
        {title:'First one', description:'check'},
        {title:'First one', description:'check'},
        {title:'First one', description:'check'},
        {title:'First one', description:'check'}, 
        {title:'First one', description:'check'}
    ]})
})

sessionsRouter.route('/:id').get((req,res)=>{
    const id = req.params.id;
    res.send('hello, single sessions'+ id)
})

  module.exports = sessionsRouter