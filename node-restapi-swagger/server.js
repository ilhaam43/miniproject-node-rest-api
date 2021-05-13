const express = require('express');
const connectDB = require('./config/db');
const { catchphrases } = require("./routes/index");

const app = express();
connectDB();

app.use(express.json());
app.use('/catchphrases', catchphrases)

app.get('/', (req, res) => {
    res.send('Hello World')
});

app.listen(process.env.PORT || 5000, () => console.log('Up and running '));