const { Horticultural } = require('../models')
const { safeObjectId } = require('../helpers')

const methods = {
    async create(request, response) {
        const { name, shade, image, description, categoryId, averagePrice, measurement } = request.body

        const horticultural = new Horticultural()

        if (!name || !image || !categoryId || !measurement) {
            return response.json({ error: 'Please, fill in the fields: "name" ; "image" ; "categoryId" and "measurement"'})
        }

        try {
            const insertedObject = await horticultural.insertOne({ name, shade, image, description, categoryId, averagePrice, measurement })
            response.json(insertedObject)
        } catch (error) {
            response.json(error)
        }
    },

    async list(request, response) {
        const horticultural = new Horticultural()

        try {
            const horticulturais = await horticultural.list({})
            response.json(horticulturais)
        } catch (error) {
            response.json(error)
        }
    },

    async show(request, response) {
        const { id } = request.params
        const convertedObjectId = safeObjectId(id)

        const horticultural = new Horticultural()

        try {
            const horticulturalToReturn = await horticultural.findOne({  _id: convertedObjectId  })

            response.json(horticulturalToReturn)
        } catch (error) {
            response.json(error)
        }
    },

    async update(request, response) {
        const { id } = request.params
        const convertedObjectId = safeObjectId(id)
        const { name, shade, image, description, categoryId, averagePrice, measurement } = request.body

        if (!name || !image || !categoryId || !measurement) {
            return response.json({ error: 'The fields "name"; "image"; "categoryId" and "measurement" are all required.' })
        }

        const horticultural = new Horticultural()

        try {
            const updatedObject = await horticultural.updateOne({ _id: convertedObjectId }, { name, shade, image, description, categoryId, averagePrice, measurement })

            response.json(updatedObject)
        } catch (error) {
            response.json(error)
        }
    },

    async destroy(request, response) {
        const { id } = request.params
        const convertedObjectId = safeObjectId(id)

        const horticultural = new Horticultural()

        try {
            const destroyedObject = await horticultural.updateOne({ _id: convertedObjectId })

            response.json(destroyedObject)
        } catch (error) {
            response.json(error)
        }
    }

}

module.exports = methods 