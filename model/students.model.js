module.exports = (sequelize, Sequelize) => {
    const students = sequelize.define("students", {
        username: {
            type: Sequelize.STRING
        },
        fullname: {
            type: Sequelize.STRING
        },
        presentcount:{
            type:Sequelize.INTEGER,
            default:0
        },
        absentcount:{
            type:Sequelize.INTEGER,
            default:0
        }
    });
    return students;
};