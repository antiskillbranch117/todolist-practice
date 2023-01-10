const mongoose=require('mongoose')
const Schema=mongoose.Schema
const TaskSchema=new Schema({
    task:String,
    finish:{type:Boolean,default:false},
    author:{type:Schema.Types.ObjectId,
        ref:'User'
    }
})

module.exports=mongoose.model('Task',TaskSchema)