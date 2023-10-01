const userModel = require('../models/user');

module.exports.profile = (req, res)=>{
    return res.render('profile.ejs',{
        title: 'profile Page'
    })
}

module.exports.signUp = (req, res)=>{
    return res.render('sign-up.ejs',{
        title: 'Sign Up Page'
    })
}

module.exports.signIn = (req, res)=>{
    return res.render('sign-in.ejs',{
        title: 'Sign In Page'
    })
}

//Sign up OR create a user
module.exports.createUser =async (req, res)=>{
    const {email, password, name, confirmPassword} = req.body;
    //if password anf confirm-password are not equal
    if(password != confirmPassword){
        return res.redirect('back');
    }

    //if user already exists in db
    const userExists =await userModel.findOne({email});
    if(userExists){
        console.log('Duplicate User');
        return res.redirect('/sign-in');
    }
    const savedUser =await userModel.create({
        email,
        password,
        name
    })
    console.log(savedUser);
    return res.redirect('/sign-in');

}

//Sign in OR create a session
// module.exports.createSession =async (req, res)=>{
//     const {email, password} = req.body;
//     console.log(`${email}`)
//     //check if user registered
//     const userExists = await userModel.findOne({email});
//     if(userExists){
//         if(password!=userExists.password){
//             console.log('wrong password');
//             res.redirect('/sign-in');
//         }else{
//             res.cookie('user_id',userExists?.id);
//             console.log('Signed In Successfully, Cookie set');
//             res.redirect('/profile');
//         }
//     }else{
//         res.redirect('/sign-up');
//     }
    
// }

module.exports.createSession =async (req, res)=>{
    return res.redirect('/profile');
}