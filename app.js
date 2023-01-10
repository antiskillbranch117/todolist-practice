const express=require('express')
const mongoose=require('mongoose')
const app=express()
const path=require('path')
const User=require('./model/user')
const passport=require('passport')
const LocalStrategy =require('passport-local')
const session=require('express-session')
const flash=require('connect-flash')




const userRoutes=require('./route/users')
const taskRouter=require('./route/task')

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))

const sessionConfig={
    secret:'secret',
    resave:false,
    saveUninitialized:true
}
app.use(session(sessionConfig))
app.use(flash())

const url='mongodb+srv://Misaka10031:Misaka10031.@dynamic-web.8otebo5.mongodb.net/?retryWrites=true&w=majority'
async function connect(){
    try{
    await mongoose.connect(url)
    console.log('connected')
}catch(error){
    console.log(error)

}
} 
connect()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize())
app.use(passport.session())
passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())
app.use((req,res,next)=>{
    res.locals.currentUser = req.user
    next()
})
app.use('/users',userRoutes)
app.use('/',taskRouter)




app.listen(3000,()=>{
    console.log('server is running')
})