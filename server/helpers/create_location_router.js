const ObjectID = require('mongodb').ObjectID;
const express = require("express");


const createLocationRouter = function(collection) {
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

    router.get('/:id', (req, res)=>{
        const id = req.params.id
        collection
          .findOne({_id: ObjectId(id)})
          .then((doc)=>res.json(doc))
          .catch((err) => {
            console.error(err);
            res.status(500);
            res.json({status:500, error: err});
          });
      });


    router.put('/:id', (req, res) => {
        const id = req.params.id;
        const updatedData = req.body;
        delete updatedData._id;
    
        collection
        .updateOne({ _id: ObjectID(id) }, { $set: updatedData })
        .then(result => {
          res.json(result);
        })
        .catch((err) => {
          res.status(500);
          res.json({ status: 500, error: err });
        });
      });

  return router  
}

module.exports = createLocationRouter;