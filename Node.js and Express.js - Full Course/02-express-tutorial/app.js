const express = require('express')
const app = express()

const login = require('./routes/auth')
const people = require('./routes/people')

// static assets
app.use(express.static('./methods-public'))
// parse from data
app.use(express.urlencoded({extended: false}))

//parse json
app.use(express.json())

app.use('/api/people', people)

app.use('/login', login)


app.listen(5000, () => {
    console.log('Server is listening on port 5000....')
})