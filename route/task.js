const express=require('express')
const router=express.Router()
const Task=require('../model/task')
const {isLoggedIn}=require('../MiddleWare/loggin')
const {isAuthor}=require('../MiddleWare/isAuthor')

router.get('/',isLoggedIn,async (req,res)=>{
    const tasks=await Task.find({})
    res.render('home',{tasks})
})
router.post('/',isLoggedIn,async(req,res)=>{
    const {task}=req.body
    const tasks=new Task({task})
    tasks.author= req.user._id
    await tasks.save()
    res.redirect('/')

})
router.post('/finish/:id',isLoggedIn,isLoggedIn,async(req,res)=>{
    const {id}=req.params
    const {finish}=await Task.findById(id)
    const result=await Task.findByIdAndUpdate(id,{finish:!finish})
    res.redirect('/')
})
router.post('/delete/:id',isLoggedIn,isLoggedIn,async(req,res)=>{
    const {id}=req.params
    await Task.findByIdAndDelete(id)
    res.redirect('/')
})

module.exports=router