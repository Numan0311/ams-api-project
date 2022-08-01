const express = require("express");
const cors = require("cors");
const app = express();
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config()

const fileUpload=require('express-fileupload')
const db = require("./model/db.index");
db.sequelize.sync()
    .then(() => {
        console.log("Synced db.");
    })
    .catch((err) => {
        console.log("Failed to sync db: " + err.message);
    });
const corsOptions = {
    origin: "*"
};
app.use(cors(corsOptions));
app.use(fileUpload({
    createParentPath: true
}))
app.use(express.json());
app.use(express.static('./public'))
app.use(express.urlencoded({ extended: true }));

const user=require('./routes/user.routes')
const student=require('./routes/student.routes')
const attendance=require('./routes/attendance.routes')
app.use('/admin',user)
app.use('/student',student)
app.use('/attendance',attendance)

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});