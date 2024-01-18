const Reg=require('../models/reg')
const bcrypt=require('bcrypt')



exports.loginpage=(req,res)=>{
  res.render('login.ejs',{message:``})
}

exports.regpage=(req,res)=>{
  res.render('reg.ejs',{message:``})
}

exports.register=async(req,res)=>{
   const {email,pass}=req.body
   const usercheck=await Reg.findOne({Email:email})
   const passconverted=await bcrypt.hash(pass,10)
  if(usercheck==null){
    const record=new Reg({Email:email,password:passconverted})
    record.save()
   res.render('reg.ejs',{message:`${email} account created successfully`})
  }
  else{
    res.render('reg.ejs',{message:`${email} account already registered with us`})
  }
}

exports.logincheck=async(req,res)=>{
  const{email,pass}=req.body
   const record = await Reg.findOne({Email:email})
   if(record!==null){
    const passcompare=await bcrypt.compare(pass,record.password)
    if(passcompare){
      req.session.isAuth=true
      req.session.Email=email
    res.redirect('/clothes')
    }
    else{
      res.render('login.ejs',{message:'Wrong Credentials'})
    }
   }else{
    res.render('login.ejs',{message:'Wrong Credentials'})
   }

}