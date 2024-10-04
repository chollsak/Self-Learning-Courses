const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    name: {
        type:String,
        require:[true, 'must provide name'],
        trim:true,
        maxlenght: [20, 'name cannot be more than 20 characters']
    },
    completed: {
        type:Boolean,
        default: false
    }, 
})

module.exports = mongoose.model('Task',taskSchema)