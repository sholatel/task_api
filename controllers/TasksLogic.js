const TaskModel= require('../models/TasksModel')
const asyncWrapper= require('../middlewares/asyncWrapper')
const {constructSuccessJson}= require('../apiMessages/successApiLogicHandler')
const {callTaskApiCustomError}=require('../Errors/TaskApiCustomError')

  

/*Logic for retrieving all tasks from the database*/
const getAllTasks = asyncWrapper ( async (req,res,next)=> {
    const tasks= await TaskModel.find({})
    if (tasks.length==0) {
       return  next(callTaskApiCustomError('You have not set any task yet',404))
    }
    res.status(200).json(constructSuccessJson('Request successfull',tasks))
})

/*Logic for creating a new task and saving to the  database*/
const createTask = asyncWrapper (async (req,res, next)=> {
   const task=await TaskModel.create(req.body)
   if (!task) {
      return  next(callTaskApiCustomError("Can'nt create new task",404))
   }
   res.status(200).json(constructSuccessJson('Request successfull',task))

})

/*Logic for getting  a single task from  the  database*/
const getTask = asyncWrapper (async (req,res, next)=> {
   const {id}=req.params
   const task=await TaskModel.findOne({_id:id})
   if (!task) {
      return  next(callTaskApiCustomError(`No user with id ${id}`,404))
   }
   res.status(200).json(constructSuccessJson('Request successfull',task))
})


/*Logic for updating and editing saved existing tasks in the database*/
const updateTask = asyncWrapper (async (req,res, next)=> {
   const {id}=req.params
   const task=await TaskModel.findOneAndUpdate({_id:id}, req.body, { 
      new:true,
      runValidators:true
   } )
   if (!task) {
      return  next(callTaskApiCustomError(`No user with id ${id}`,404))
   }
   res.status(200).json(constructSuccessJson('update successfull',task))
})


/*Logic for deleting a single task from  the  database*/
const deleteTask = asyncWrapper (async (req,res, next)=> {
   const {id}=req.params
   const task=await TaskModel.findOneAndDelete({_id:id})
   if (!task) {
      return  next(callTaskApiCustomError(`No user with id ${id}`,404))
   }
   res.status(200).json(constructSuccessJson(`User with id:${id} successfully deleted`,task))
   
})

module.exports ={getAllTasks, createTask, getTask,updateTask, deleteTask }