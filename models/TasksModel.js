const mongoose = require('mongoose')
const { boolean } = require('webidl-conversions')

const TaskSchema= mongoose.Schema({
    name: {
        type:String,
        required: [true, 'Name of task is required'],
        maxLength: [20,'Length of your task namecharaters should not be more that 20']
    },

    description: {
        type:String,
        maxLength: [100,'Length of your task description charaters should not be more that 100']
    },

    completed: {
        type: Boolean,
        default:false,
    },

    date: {
        type:Date,
        default:Date.now()
    }
})


module.exports=mongoose.model('TasksModel',TaskSchema)