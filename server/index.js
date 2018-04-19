const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

var Sequelize = require('sequelize')
var sequelize = new Sequelize('postgres://postgres:secret@localhost:5432/postgres')

app.use(function (request, response, next) {
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    response.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE')
    next()
})

app.listen(4001, () => console.log('Express API listening on port 4001'))

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



app.get('/advertisements', (request, response) => {
    Advertisement.findAll({
        attributes: ['id', 'name', 'price', 'description', 'image', 'email', 'phone']
    })
        .then(result => {
            response.send({
                ads: result
            })
        })
        .catch(error => {
            response.status(500).send({ error: 'Something went wrong with Postgres' })
        })
})


app.get('/advertisements/:id', (request, response) => {
    const advertisementId = request.params.id
    Advertisement.findById(advertisementId)
        .then(result => {
            if (!result) {
                response.status(404).send({ error: 'Does not exist' })
            }
            else {
                response.send(result)
            }
        })
        .catch(error => {
            response.status(500).send({ error: 'Something went wrong with Postgres' })
        })
})


app.post('/advertisements', (request, response) => {
    const advertisement = request.body
    console.log(advertisement)
    Advertisement.create(advertisement).then(entity => {
        response.status(201).send(entity)
    })
})

Advertisement.findById(2).then(advertisement => console.log(JSON.stringify(advertisement)))
