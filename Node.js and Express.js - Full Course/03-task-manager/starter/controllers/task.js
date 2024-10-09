
const Task = require('../models/task')
const asyncWrapper = require('../middleware/async')
const {createCustomError} = require('../errors/custom-error')


const getAllTasks = asyncWrapper(async (req, res) => {

        const tasks = await Task.find({})
        return res.status(200).json({tasks})

        // return res.
        //     status(200)
        //     .json({status : 'success', data: {
        //         tasks,
        //         nbHits: tasks.length
        //     }})
} )

const createTask = asyncWrapper( async (req, res) => {
    const {name} = req.body

   
        const exitingTask = await Task.findOne({name})

        if(exitingTask){
            return res.status(409).json({ msg: 'Task already exists in the system'})
        }

        const task = await Task.create({name, completed: false})
        return res.status(201).json({task})

}
)

const getTask = asyncWrapper( async (req, res, next) => {
    
        const {id:taskID} = req.params
        const foundTask = await Task.findOne({_id:taskID})

        if(!foundTask){
            return next(createCustomError(`Not task with id : ${taskID}`, 404))
            // return res.status(404).json({msg: `No task with id : ${taskID}`})
        }

        return res.status(200).json({foundTask})

})


const deleteTask = async (req, res, next) => {
    try {
        const { id: taskID } = req.params;
        const foundTask = await Task.findOneAndDelete({ _id: taskID })
        
        if (!foundTask) {
            return next(createCustomError(`Not task with id : ${taskID}`, 404))
        }
        
        return res.status(200).json({ msg: `Removing ${foundTask.name} completed` })
        // return res.status(200).json({task: null, status: 'success'})
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
};

const updateTask = async (req, res, next) => {
    try {
        const { id: taskID } = req.params
        const foundTask = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
            new: true,
            runValidators: true,
        })

        if(!foundTask){
            return next(createCustomError(`Not task with id : ${taskID}`, 404))
        }

        return res.status(200).json({foundTask})

    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}