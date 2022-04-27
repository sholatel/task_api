const mgDb = require('mongoose');

const connectDb= (url) => {   
        mgDb.connect(url)
    }

module.exports=connectDb
    
