const Advertisement = require('./model')
const Router = require('express').Router
//not sure if the client stuff is necessary 
// const { Client } = require('pg')

// const connectionString = 'postgresql://postgres:secret@localhost:5432/postgres'
// const client = new Client({ connectionString })

// client.connect()

const router = new Router()

router.get('/advertisements/:id', (req, res) => {
    const advertisementId = req.params.id
    Advertisement.findById(advertisementId)
        .then(result => {
            if (!result) {
                res.status(404).send({ error: 'Does not exist' })
            }
            else {
                res.send(result)
            }
        })
        .catch(err => {
            res.status(500).send({ error: 'Something went wrong with Postgres' })
        })
})

router.get('/advertisements', (req, res) => {
    Advertisement.findAll({
        attributes: ['id', 'name', 'description', 'price', 'image', 'email', 'phone']
    })
        .then(result => {
            res.send({
                products: result
            })
        })
        .catch(err => {
            res.status(500).send({ error: 'Something went wrong with Postgres' })
        })
})

module.exports = router