const asyncWrapper =  (controllerFnc)=> {
    return async (req,res,next) => {
                try {
                    await controllerFnc(req,res,next)
                }
    
                catch (error) {
                    next(error)
                }
        }
       
}

module.exports=asyncWrapper