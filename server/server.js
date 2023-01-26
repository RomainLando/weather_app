const express = require("express");
const cors = require("cors")
const app = express();
const port = 9000;

app.use(cors());

app.get('/', (req, res) => {
    res.send("Hello");
})

app.get('/edinburgh', (req, res) => {
    console.log(`request: ${req}`);
    res.json({
        weather: "Sunny"
    })
})

app.listen(port, () => {
    console.log(`listening on port ${port}.`)
})