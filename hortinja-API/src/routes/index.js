const router = require('express').Router()
const horticulturais = require('./horticulturais')

router.use('/horticulturais', horticulturais)

module.exports = router 