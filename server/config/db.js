const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI);
const connection = mongoose.connection;

connection.on('connected',()=>{
    console.log('Connected to MongoDB!');
});
connection.on('error',(err)=>{
    console.error('error',err);
});

module.exports = connection;