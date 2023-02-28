const mongoose =require( "mongoose")
const dotenv =require( "dotenv")
mongoose.set('strictQuery', false)
dotenv.config()

const connection = mongoose.connect(process.env.MONGO_URL);
module.exports =  connection