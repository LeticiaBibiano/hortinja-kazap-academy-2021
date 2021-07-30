const Database = require('./Database')

class Horticultural extends Database {
    constructor(params = {}) {
        super()
        this.collection = 'horticulturais'
    }
}

module.exports = Horticultural