const express = require('express');
const route = require('./routes/userRoute');
const port = 8000;
const cookieParser = require('cookie-parser');
const connect = require('./config/db-connection');
connect();


const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');


const app = express();

app.set('view-engine', 'ejs');
app.set('views','./views')
app.use(express.urlencoded());

app.use(
    session({
        name:"codial",
        //change the secret before deployment
        secret: "BlahSpmething",
        saveUninitialized:false,
        resave: false,
        cookie:{
            maxAge:(100*60*100),
        }
    })
)
app.use(passport.initialize());
app.use(passport.session());
app.use('/',route);

app.listen(port,(e)=>{
    if(e){
        console.log(`Error occurred ${e}`);
    }else{
        console.log(`Server is up and running...`);
    }
})

