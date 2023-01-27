const MongoClient = require('mongodb').MongoClient;
const express = require("express");
const cors = require("cors");
const { DateTime } = require("luxon");
const app = express();
const port = 9000;

app.use(cors());

app.get('/', (req, res) => {
    res.send("Hello");
})

app.get('/edinburgh', async (req, res) => {
    const weatherResponse = await fetch("https://api.open-meteo.com/v1/forecast?latitude=55.95&longitude=-3.20&hourly=temperature_2m,weathercode");
    const weatherData = await weatherResponse.json();
    const currentDateTime = DateTime.now().toFormat("yyyy-MM-dd'T'HH:'00'");
    const times = weatherData.hourly.time;
    const index = times.findIndex((time)=>time===currentDateTime);
    const currentCode = weatherData.hourly.weathercode[index];

    MongoClient.connect('mongodb://127.0.0.1:27017', {useUnifiedTopology:true})
.then( (client) => {
    const db = client.db('weather');
    const collection = db.collection('weather_codes');
    collection
      .find()
      .then((doc)=>res.json(doc))
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({status:500, error: err});
      });
  });
})
.catch(console.error);

    console.log(currentCode);
    console.log(`request: ${req}`);
    res.json(weatherData);
})

app.listen(port, () => {
    console.log(`listening on port ${port}.`)
})