const express = require('express');
const router = express.Router();
const userCtr = require('../controller/user-controller');
const passport = require('passport');

router.get('/sign-up', userCtr.signUp);
router.get('/sign-in', userCtr.signIn);
router.get('/profile',userCtr.profile);
//router.post('/user/create',userCtr.createUser);

//use passport as a middleware to authenticates
router.post('/user/create-session', passport.authenticate('local',{failureRedirect:'/sign-in'} ,
), userCtr.createSession);



router.post('/user/create', userCtr.createUser);

module.exports = router;