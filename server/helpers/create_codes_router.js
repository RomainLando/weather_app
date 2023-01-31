const ObjectID = require('mongodb').ObjectID;
const express = require("express");


const createCodesRouter = function(collection) {
    const router = express.Router();

    router.get('/', (req,res) => {
        collection
        .find()
        .toArray()
        .then((docs) => res.json(docs))
        .catch((err) => {
            console.error(err);
            res.status(500);
            res.json({status: 500, error: err});
        })
    })

    router.get('/:code', (req,res) => {
        const code = parseInt(req.params.code);
        collection
        .findOne({code: code})
        .then((doc) => res.json(doc))
        .catch((err) => {
            console.error(err);
            res.status(500);
            res.json({status: 500, error:err});
        })
    })

    return router;
}

module.exports = createCodesRouter;