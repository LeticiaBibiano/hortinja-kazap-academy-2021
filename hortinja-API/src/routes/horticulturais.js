const router = require('express').Router()
const { horticulturais } = require('../controllers')

router.post('/', horticulturais.create)
router.get('/', horticulturais.list)
router.get('/:id', horticulturais.show)
router.patch('/:id', horticulturais.update)
router.delete('/:id', horticulturais.destroy)

module.exports = router