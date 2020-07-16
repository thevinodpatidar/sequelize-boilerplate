const UserModel = require("../../models/userModel");


const CreateUser = async(req,res)=>{
    const jane = await UserModel.create({ firstName: "Jane", lastName: "Doe" });
    res.status(200).json({"Jane's auto-generated ID:": jane.id});
}

const GetUsers = async(req,res)=>{
    const users = await UserModel.findAll({});

    res.status(200).json({
        users
    })
}

const RemoveUser = async(req,res)=>{
    const removedUser = await UserModel.destroy({
        where:{
            firstName : "Jane"
        }
    })

    res.status(200).send(
        "User Removed");
}

module.exports = {
    CreateUser,
    GetUsers,
    RemoveUser
}