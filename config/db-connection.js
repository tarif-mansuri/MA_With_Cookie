const mongoose = require('mongoose');

module.exports = async()=>{
    const connect = mongoose.connect('mongodb://localhost/manual-authentication');
    console.log(`Connected ${connect}`);
}