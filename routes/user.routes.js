const express= require('express')
const {signup, login,getAllTeachers} = require("../controllers/user.controller");

const router=express.Router()

router.post('/register',signup).post('/login',login)
router.get('/getAllTeachers',getAllTeachers)

module.exports= router