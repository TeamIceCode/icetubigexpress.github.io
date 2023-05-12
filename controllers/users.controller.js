let usersModel = require('../models/users.model');

function getAllUsers(req, res) {
    res.status(200).json(usersModel);
}

function addUser(req, res) {
    
    const { fullname, email, age, gender, address, mobile, password, confirmPassword } = req.body;

    
    if (!fullname || !email || !age || !gender || !address || !mobile || !password || !confirmPassword ) { 
       return res.status(400).json({
            error: 'Please fill out the complete information.'
       });
    }

    usersModel.push({ fullname, email, age, gender, address, mobile, password, confirmPassword});
    res.send(`User ${email} successfully registered!`);
}

module.exports = 
        {addUser,
        getAllUsers};
