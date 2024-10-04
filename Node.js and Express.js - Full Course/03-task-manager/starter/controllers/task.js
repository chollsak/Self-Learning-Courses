const Task = require('../models/task')

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({})
        return res.status(200).json({tasks})
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
}

const createTask = async (req, res) => {
    const {name} = req.body

    try {
        const exitingTask = await Task.findOne({name})

        if(exitingTask){
            return res.status(409).json({ msg: 'Task already exists in the system'})
        }

        const task = await Task.create({name, completed: false})
        return res.status(201).json({task})

    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
}

const getTask = (req, res) => {
    res.json({name: req.params.name})
}

const updateTask = (req, res) => {
    res.send('update task')
}

const deleteTask = (req, res) => {
    res.send('delete task')
}


module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}