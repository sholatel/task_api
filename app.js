const express  = require('express');
const taskRouter= require('./routes/task_api_route')
const connectDb=require('./db/connect');
const {errorHandlerMiddleWare}=require('./middlewares/errorHandlerMiddleware')
const NotFound=require('./middlewares/notFound')
require('dotenv').config()

//initialization
const app=express()
const PORT= process.env.PORT || 5000
const MONGO_URI=`${process.env.MONGO_URI_USERNAME}${encodeURIComponent(process.env.MONGO_URI_PASSWORD)}${process.env.MONGO_URI_END}`
//connection to database and set server ready to listen to connection
const start = async ()=> {
    try {
        await connectDb (MONGO_URI)
        app.listen(PORT, ()=> {
            console.log('Server successfully connected with database')
            console.log(`Server started listening on PORT ${PORT}`)
        })
    }
    catch (error) {
        console.log(`Server initialization failed:${error}`)
    }
}

start()

//middlewares
app.use(express.json())
app.use('/api/v1/task', taskRouter)
app.use(NotFound)
app.use(errorHandlerMiddleWare)





