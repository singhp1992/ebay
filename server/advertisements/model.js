const Sequelize = require('sequelize')
const sequelize = require('../db')

const Advertisement = sequelize.define('advertisement', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    image: Sequelize.STRING,
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: false
    },
}, {
        tableName: 'advertisements',
        timestamps: false
    })

//Advertisement.findById(2).then(advertisement => console.log(JSON.stringify(advertisement)))


module.exports = Advertisement