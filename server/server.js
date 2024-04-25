const express = require('express');
const app = express();
require('dotenv').config();
const db = require('./config/db.js');
const dotenv = require('dotenv');
const port = process.env.PORT || 5000;
const usersRoute = require('./routes/usersRoute');


app.use(express.json());
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.use("/api/users", usersRoute);


app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})