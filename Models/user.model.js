const Sequelize = require("sequelize");
const bcrypt = require("bcrypt");
const db = require('../Service/db.config');


const Model = Sequelize.Model;
class User extends Model {
    static hashPassword(password) {
        return bcrypt.hashSync(password, 10);
    }
    static confirmPassword(password, hashedPassword) {
        return bcrypt.compareSync(password, hashedPassword);
    }
}

User.init(
    {
        id: {
            type: Sequelize.STRING,
            allowNull: false,
            primaryKey: true
        },
        user_name: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allownull: false
        }
    },
    {
        sequelize: db,
        modelName: "user"
    }
);
// //Role.hasMany(User,, defaultValue: 0 })
// User.belongsTo(Role, { constraints: false, foreignKey: "RoleID" });
// //Status.hasMany(User, { constraints: false, defaultValue: 0 })
// User.belongsTo(Status, { constraints: false, foreignKey: "StatusID" });


// User.hasOne(Customer, {
//     foreignKey: 'userId',
//     targetKey: 'id',
// })

// Customer.belongsTo(User, {
//     foreignKey: 'userId',
//     targetKey: 'id',
// });

module.exports = User;
