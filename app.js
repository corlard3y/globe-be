const express = require('express');
const chalk = require('chalk')
const path = require('path')
const morgan = require('morgan')
const debug = require('debug')('app')

const PORT = process.env.PORT || 5000;
const app = express();
const sessionsRouter = express.Router()

app.use(morgan('tiny'));
// app.use(express.static(path.join(__dirname, './public/')))

app.set('views', './src/views')
app.set('view engine', 'ejs')

sessionsRouter.route('/').get((req,res)=>{
    res.render('sessions', {sessions: [
        {title:'First one', description:'check'},
        {title:'First one', description:'check'},
        {title:'First one', description:'check'},
        {title:'First one', description:'check'},
        {title:'First one', description:'check'}
    ]})
})

sessionsRouter.route('/1').get((req,res)=>{
    res.send('hello, single sessions')
})

app.use('/sessions',sessionsRouter)

app.get('/',(req,res) => {
    res.render('index', {title:'Welcome to Globe!', data: ['Route','Doc','Templates']})
})

app.listen(PORT, ()=>{
    debug(`${chalk.green(`App is Running on port ${PORT}!!!⚡️`)}`)
});

