const express = require("express");
const port = 9000;
const app = express();
const cors = require("cors");
app.use(cors());
const createCodesRouter = require('./helpers/create_codes_router');
const MongoClient = require('mongodb').MongoClient;


MongoClient.connect('mongodb://127.0.0.1:27017', {useUnifiedTopology:true})
.then((client) => {
    const db = client.db('weather');
    const codesCollection = db.collection('weather_codes');
    const codesRouter = createCodesRouter(codesCollection);
    app.use('/weather-codes', codesRouter);
})

app.listen(port, () => {
    console.log(`listening on port ${port}.`)
})