const models = require("../../models/index");


const CreateUser = async(req,res)=>{
    let data = req.body;

    try {
        let user = await models.User.create(data);

        res.status(200).json({
            msg : "User Created",
            data : user
        })
    } catch (error) {
        res.status(400).json({
            msg : error.errors[0].message,
            statusCode : 400 
        })
    }

}

module.exports = {
    CreateUser
}