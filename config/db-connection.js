const mongoose = require('mongoose');

module.exports = async()=>{
    const connect = await mongoose.connect('mongodb://localhost/manual-authentication');
    console.log(`Connected to mongodb`);
}