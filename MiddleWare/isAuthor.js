const task = require("../model/task")

module.exports.isAuthor=async(req,res,next)=>{
    const {id}=req.params
    const task= await task.findById(id)
    if(!task.author.equals(req.user._id)){
        return res.redirect('/')
    }
    next()
}