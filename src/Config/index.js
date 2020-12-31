require('dotenv').config()
module.exports={
    getDbConnectionString:()=>{
        return process.env.mongodbUrl||"";
    }
}
