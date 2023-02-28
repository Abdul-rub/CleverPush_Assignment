
const mongoose =require( "mongoose")

const photoSchema= mongoose.Schema({
    query:String
})

const photomodel = mongoose.model("photos",photoSchema)
 module.exports=photomodel
