const db= require('../model/db.index')
const user=db.users
const bcrypt = require('bcrypt');
const Op = db.Sequelize.Op;
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config()

function generateAccessToken(userId) {
    return jwt.sign({id:userId}, process.env.SECRET_TOKEN, { expiresIn: '2h' });
}


async function checkDuplicates(email,username){
    const userExist=await user.findAll({where:{username:username,email:email}})
    console.log(userExist)
   if(userExist.length>0){
       return userExist;
   }
   return null;
}

module.exports.verifyToken=async (req,res,next)=>{
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, process.env.SECRET_TOKEN, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }

            req.user = user;
            next();
        });
    } else {
        res.status(401).json({
            message:"Not Authorized"
        });
    }
}

module.exports.signup=async (req,res,next)=>{
    const checkDuplicate=await checkDuplicates(req.body.email,req.body.username)
    if(checkDuplicate){
        res.json({
            message:'User already Exists',
            data:checkDuplicate
        })
        return;
    }
    try{
    const {file}=req.files;
    if(!req.body.role){
        req.body.role='teacher'
    }
    await file.mv('./public/src/img/'+file.name)
    const salt = await bcrypt.genSalt(10);
    req.body.password=await bcrypt.hash(req.body.password,salt)
    req.files=file.name;

    const newUser= await user.create({image: req.files,...req.body})

    res.status(201).json({
        status:'success',
        message:'User Added',
        data: newUser
    })
    }catch (e){
        console.log(e)
        res.status(400).json({
            message:"Error Occurred"
        })
    }
}


module.exports.login=async (req,res)=>{
    const userLogin=await user.findOne({where:{username:req.body.username}})

    if(await bcrypt.compare(req.body.password,userLogin.password)){
        const token=generateAccessToken(userLogin.id)
        res.status(200).json({
            status:"Login",
            token:token
        })
        return;
    }

    res.status(401).json({
        status:'failed',
        message:'invalid login'
    })
}


module.exports.updateUser=async (req,res)=>{
    
}

module.exports.getAllTeachers=async (req,res)=>{
    const teachers= await user.findAll({where:{role:'teacher'}})
    res.json({teachers})
}