const express= require('express')
const {signup, getAll} = require("../controllers/student.controller");
const {verifyToken} = require("../controllers/user.controller");

const router=express.Router()

router.post('/add',signup).get('/all',getAll)

module.exports= router