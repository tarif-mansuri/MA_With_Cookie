const passport = require('passport');
const localPassport = require('passport-local');
const userModel = require('../models/user');

const passportStrategy = localPassport.Strategy;

passport.use(
    new passportStrategy({
        usernameField:'email'
    },
       async function(email, password, done){
            const userExists =await userModel.findOne({email});
            console.log(email);
            console.log(userExists);
            if(userExists){
                if(userExists.password == password){
                    return done(null, userExists);
                }else{
                    return done(null, false);
                }
            }else{
                return done(null, false);
            }
        }
    )
)


//serialize user ie set cookie in chrome
passport.serializeUser((user, done)=>{
   console.log('Serialize');
   return done(null,user.id);
})

//deserialize user ie check in db if user exists

passport.deserializeUser((id, done)=>{
    console.log('DESerialize');
    const userExists = userModel.findOne({id});
    if(userExists){
        return done(null, userExists);
    }else{
        console.log('User Not found by the session');
        done(error);
    }
})

module.exports = passport;