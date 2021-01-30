const validator = require('../helpers/validate');

const info = (req, res, next) => {
    const validationRule = {
        "name": "required|string",
        "github": "required|string",
        "email": "required|email",
        "mobile": "required|string",
        "twitter": "string"
    }
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412)
                .send({
                    status: "error",
                    message: 'Validation failed',
                    data: err
                });
        } else {
            next();
        }
    });
}

module.exports = { 
  info
}