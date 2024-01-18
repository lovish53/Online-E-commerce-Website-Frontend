const router=require('express').Router()
const regc=require('../controllers/regcontroller')
const clothesc=require('../controllers/clothescontroller')
function handlelogin(req,res,next){
    if(req.session.isAuth){
        next()
    }
    else{
        res.redirect('/')
    }
}



router.get('/',regc.loginpage)
router.get('/reg',regc.regpage)
router.post('/reg',regc.register)
router.post('/',regc.logincheck)
router.get('/clothes',handlelogin,clothesc.clothespage)
router.get('/logout',clothesc.logout)
router.get('/Update',clothesc.updateform)
router.post('/Update',clothesc.updatedetails)
router.get('/profile/:id',clothesc.profilepage)
module.exports=router