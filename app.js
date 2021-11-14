const express = require('express');
const chalk = require('chalk')
const path = require('path')
const morgan = require('morgan')
const debug = require('debug')('app')

const PORT = process.env.PORT || 5000;
const sessionsRouter = require('./src/Routes/sessionsRouter');

const app =  express();
// module.exports = router;

app.use(morgan('tiny'));
// app.use(express.static(path.join(__dirname, './public/')))

app.set('views', './src/views')
app.set('view engine', 'ejs')


app.use('/sessions',sessionsRouter)

app.get('/',(req,res) => {
    res.render('index', {title:'Welcome to Globe!', data: ['Route','Doc','Templates']})
})

app.listen(PORT, ()=>{
    debug(`${chalk.green(`App is Running on port ${PORT}!!!⚡️`)}`)
});

