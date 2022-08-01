const {ForeignKeyConstraintError} = require("sequelize");
module.exports = (sequelize, Sequelize) => {
    const attendance = sequelize.define("attendances", {
        date:{
            type: Sequelize.DATE
        },
        s_id: Sequelize.JSON({
            type:Sequelize.INTEGER,
            references:{
                model:"students",
                key:'id'
            }
        }),
        t_id: {
            type: Sequelize.INTEGER,
            references:{
                model:"users",
                key:'id'
            }
        },
        present: {
            type: Sequelize.STRING
        }
    });
    return attendance;
};