//a custom of class for handling api error 
class TaskApiCustomError extends Error {
   constructor (message, status) {
        super(message)
        this.status= status
        this.errMsg=message
    }
}


//function for returning an instance or task api custom api
const callTaskApiCustomError = (errMsg, status)=> {
    return new TaskApiCustomError(errMsg,status)
}


module.exports={callTaskApiCustomError, TaskApiCustomError}