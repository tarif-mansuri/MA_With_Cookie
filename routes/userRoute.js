const express = require('express');
const router = express.Router();
const userCtr = require('../controller/user-controller');

router.get('/sign-up', userCtr.signUp);
router.get('/sign-in', userCtr.signIn);
router.get('/profile',userCtr.profile);
router.post('/user/create',userCtr.createUser);
router.post('/user/create-session',userCtr.createSession);

module.exports = router;