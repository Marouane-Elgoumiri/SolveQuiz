const express = require('express');
const app = express();
require('dotenv').config();
const db = require('./config/db.js');
const dotenv = require('dotenv');
const port = process.env.PORT || 5000;
const usersRoute = require('./routes/usersRoute');
const examRoute = require('./routes/examRoute');

app.use(express.json());


app.use("/api/users", usersRoute);
app.use("/api/exams", examRoute);

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})