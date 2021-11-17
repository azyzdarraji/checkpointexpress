const express =require("express");
const app=express();
const path=require("path");

// view ejs

app.set("view engine","ejs");
app.set('views',path.join(__dirname,"/views"));

app.get('/ejs' ,(req,res)=>{
    res.render("indexViews" ,{msg:'check point express'})
});
app.get('/styleviews.css' ,(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/styleviews.css'))
})

const port=5000 ;

const logger=(req,res,next)=>{
    const day=new Date();
    
    if (day.getDay() ===0 || day.getDay()===6 || day.getHours()<9 || day.getHours > 17)
     {
         return res.sendFile(path.join(__dirname,'/public/404/index404.html'))
     }
     next()
};
app.get('/style404.css' ,(req,res)=>{
    res.sendFile(path.join(__dirname,'/public/404/style404.css'))
})
app.use(logger)
app.use(express.static("Public"))
app.listen(port,()=>{
    console.log(`serveur rating on port ${port}`);
})
