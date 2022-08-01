const db= require('../model/db.index')
const {noRawAttributes} = require("sequelize/lib/utils/deprecations");
const student=db.students

async function checkDuplicates(username){
    const userExist=await student.findAll({where:{username:username}})

    if(userExist.length>0){
        return userExist;
    }
    return null;
}

module.exports.signup=async (req,res,next)=>{
    const checkDuplicate=await checkDuplicates(req.body.username)
    if(checkDuplicate){
        res.json({
            message:'Student already Exists',
            data:checkDuplicate
        })
        return;
    }
    try{
      const newStudent= await student.create(req.body)

        res.status(201).json({
            status:'success',
            message:'Student Added',
            data: newStudent
        })
    }catch (e){
        console.log(e)
        res.status(400).json({
            message:"Error Occurred"
        })
    }
}


module.exports.getAll=async (req,res)=>{
    const allStudents= await student.findAll();

    res.json({allStudents})
}


