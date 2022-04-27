const {TaskApiCustomError} = require('../Errors/TaskApiCustomError')

// function for constructing error json and also return
const constructErrorJson = (errorMsg) => {
    return {success:false, msg: errorMsg}
}

//middleware for handling different error  in api
const errorHandlerMiddleWare = (err, req,res,next)=> {    
    if (err instanceof TaskApiCustomError) {
        return res.status(err.status).json(constructErrorJson(err.errMsg))
    }     
    return res.status(500).json(constructErrorJson ('Something went wrong...Check your connection and try again!')) 
}



module.exports={errorHandlerMiddleWare , constructErrorJson}