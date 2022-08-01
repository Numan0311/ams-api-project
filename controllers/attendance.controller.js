const db= require('../model/db.index')
const {Op} = require("sequelize");
const attendance=db.attendance
const students=db.students

module.exports.addAttendance=async (req,res)=>{
       try{
           const myDate=new Date(Date.now()).toISOString()
           const date=myDate.slice(0,10);
           console.log(date)
           // console.log(req.user.id)
           const newStudent= await attendance.create({date:date,t_id:1,...req.body})
           let data=req.body.s_id;
           data=data.split(',')
           data=JSON.parse(data)
           data=Array.from(data)
           const updateCount = await students.increment('presentcount',{
               where:
                   {
                       id: {
                           [Op.in]: data
                       }
                   }
           })

           const absentCount = await students.increment('absentcount',{
               where:
                   {
                       id: {
                           [Op.not]: data
                       }
                   }
           })

            res.status(201).json({
                status:'success',
                message:'Attendance Added',
                 data: newStudent
            })
    }catch (e){
        console.log(e)
        res.status(400).json({
            message:"Error Occured"
        })
    }
}


module.exports.getPresentStudents=async (req,res)=>{
    console.log(req.user)
    let {date}= req.body;
    date=new Date(date)
    console.log(date)
    const studentsPresent=await attendance.findAll({
        attributes: [
            's_id'
        ],
        where:{
        date:date,
            // t_id:req.user.id
        }
    })


    if(studentsPresent.length===0){
        return res.status(404).json({
            status:'No Record Found'
        })
    }
    else {
        console.log(studentsPresent[0])
        let data=studentsPresent[0].s_id;
        data=data.split(',')
        data=JSON.parse(data)
        data=Array.from(data)
        console.log(typeof data)

        const presentStudents = await students.findAll({
            where:
                {
                    id: {
                        [Op.in]: data
                    }
                }
        })

        const absentStudents = await students.findAll({
            where:
                {
                    id: {
                        [Op.not]: data
                    }
                }
        })

        res.status(200).json({
            "presentStudents":presentStudents,
            "absentStudents":absentStudents
        })
    }
}
