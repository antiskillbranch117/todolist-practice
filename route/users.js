const express=require('express')
const router=express.Router()
const User=require('../model/user')
const passport=require('passport')

router.get('/register',(req,res)=>{
    res.render('register')
})
router.post('/register',async (req,res)=>{
    const {username,password}=req.body
   const user=new User({username})
   const result=await User.register(user,password)
   console.log(result)
   res.redirect('/users/login')
})
router.get('/login',async(req,res)=>{
    res.render('login')
})
router.post('/login',passport.authenticate('local',{failureRedirect: '/register'}),(req,res)=>{
    res.redirect('/')
})
router.get('/logout',(req,res)=>{
    req.logout(req.user, err => {
        if(err) return next(err);
        res.redirect("/");
      });
})



module.exports=router
