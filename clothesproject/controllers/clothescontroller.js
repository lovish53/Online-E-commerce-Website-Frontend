const Details=require('../models/details')

exports.clothespage=async(req,res)=>{
   const email= req.session.Email
   const record=await Details.findOne()
   res.render("clothes.ejs",{record,email})
}

exports.logout=(req,res)=>{
    req.session.destroy()
    res.redirect('/')
}

exports.updateform=(req,res)=>{
    const email= req.session.Email
    res.render('updateform.ejs',{email,message:''})
}
exports.updatedetails=(req,res)=>{
    const{fname,lname,mobile}=req.body
    const record= new Details({Fname:fname,Lname:lname,Mobile:mobile})
    record.save()
    const email= req.session.Email
    res.redirect('/clothes')
}

exports.profilepage=async(req,res)=>{
   const id = req.params.id 
   
}


