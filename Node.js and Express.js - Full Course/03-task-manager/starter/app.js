require('./db/connect')
const express = require('express')
const app = express()
const tasks = require('./routes/task')
const connectDB = require('./db/connect')
require('dotenv').config()
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

// middleware
app.use(express.static('./public'))
app.use(express.json()) // if we don't use this we don't have that data in req.body

// routes

app.use('/api/v1/tasks', tasks)
app.use(notFound)
app.use(errorHandlerMiddleware)

// app.get('/api/v1/tasks')         - get all the tasks
// app.post('/api/v1/tasks')        - create a new task 
// app.get('/api/v1/tasks/:id')     - get the single task 
// app.patch('/api/v1/tasks/:id')   - update task
// app.delete('api/v1/tasks/:id')   - delete task

const port = process.env.PORT || 3000

const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is running on port ${port}`))
    } catch (error) {
        console.log(error)
    }
}

start()

