const express = require('express');
const router = express.Router();
const baseController = require('../controllers/base-controller');
const validationMiddleware = require('../middleware/validation-middleware');
const validator = require('../helpers/validate');
const User = require('../models/User');


//router.get("/", baseController.index);
//router.post("/validate-rule", validationMiddleware.info, baseController.info);

router.get('/', async (req, res) => {
    try {
        const user = await User.find();
        if(!user) throw Error('no user');

        res.status(200).json({
            status: "success",
            message: "My Rule-Validation API",
            data:user
        });

    } catch(err) {
        res.status(400).json({ msg: err })

    }
});

router.post('/', async (req, res) => {
    const newUser = new User(req.body);

    try {
        const user = await newUser.save();
        if(!user) throw Error('invalid');

        res.status(200).json(user);

    } catch(err) {
        res.status(400).json({ msg: err })

    }
});

router.post('/validate-rule', async (req, res) => {
    const newUser = new User(req.body);

    try {
        const user = await newUser.save()
        .then(result => {
            res.status(200).json({
                rule:{
                    count: result.length,
                    type: 'GET',
                    url: "http://localhost:3000/validate-rule" + result._id,
                    error: false
                },
                data: {
                    name: result.name,
                    github: result.github,
                    email: result.email,
                    mobile: result.mobile,
                    twitter: result.twitter,
                    _id: result._id
                }
            });
        })
        if(!user) throw Error('invalid');

    } catch(err) {
        res.status(400).json({ msg: err })

    }
});

module.exports = router;