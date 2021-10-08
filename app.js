const express = require('express');
const chalk = require('chalk')
const path = require('path')
const morgan = require('morgan')
const debug = require('debug')('app')

const PORT = process.env.PORT || 5000;
const app = express();
app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, './public/')))

app.get('/',(req,res) => {
    res.send('Hello here')
})

app.listen(PORT, ()=>{
    debug(`${chalk.green(`App is Running on port ${PORT}!!!⚡️`)}`)
});

