const User = require("../../models/user");

const CreateUser = async(req,res)=>{
    let data = req.body;
    const user = await User.create(data);

    res.status(200).json({
        msg : "User Created",
        data : user
    })
}

module.exports = {
    CreateUser
}