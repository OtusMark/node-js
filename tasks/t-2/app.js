const express = require('express')

const app = express()

app.use('/', (req, res,next) => {
    console.log('this always runs')
    next()
})

app.use('/users', (req, res, next) => {
    console.log('In users middleware!')
    res.send('<h1>Add product</h1>')
})

app.use('/', (req, res, next) => {
    console.log('In another middleware!')
    res.send('<h1>Hello from Express</h1>')
})

app.listen(3000)