const { User } = require("../models");

module.exports = {
    index: (req, res) => {
        return res.status(200).json({
            status: "success",
            message: "My Rule-Validation API"
        })
    },

    info: (req, res) => {

        const { name, github, email, mobile, twitter} = req.body;
        const newUserObj = { name, github, email, mobile, twitter};
        const newUser = new User(newUserObj);

        newUser.save((saveErr) => {
            if(saveErr) {
                return res.status(412).send({
                    status: "failed",
                    message: saveErr
                })
            }
            return res.status(200).json({
                status: "success",
                message: "My Rule-Validation API"
            });
        });
        
        
    }

}