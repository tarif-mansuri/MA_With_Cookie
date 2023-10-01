const express = require('express');
const route = require('./routes/userRoute');
const port = 8000;
const cookieParser = require('cookie-parser');
const connect = require('./config/db-connection');
connect();
const app = express();

app.set('view-engine', 'ejs');
app.set('views','./views')
app.use(express.urlencoded());
app.use(cookieParser());

app.listen(port,(e)=>{
    if(e){
        console.log(`Error occurred ${e}`);
    }else{
        console.log(`Server is up and running...`);
    }
})

app.use('/',route);