const joi = require('joi')

const userValidator = joi.object({
        email : joi.string().trim().required().email().messages({
            'string.base' : "Email must be a string",
            'string.empty' : "Email cannot be empty",
            'string.email' : "Email must be a valid",
            'any.required' : "Email is required"
        }),

        password : joi.string().trim().required().messages({
            'string.base' : "Password must be a string",
            'string.empty' : "Password cannot be empty",
            'any.required' : "Password is required"
        }),

        userType : joi.string().required().valid("user","admin").messages({
            'string.base' : "userType must be a string",
            'string.empty' : "userType cannot be empty",
            'any.required' : "userType is required",
            'any.valid' : "userType only be user or admin"
        })

})

module.exports = userValidator