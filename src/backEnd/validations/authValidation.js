const Joi       = require('@hapi/joi');

module.exports = {
    userRegisterValidation: async (data) => {
        const schema = Joi.object({
            name: Joi.string()
                        .max(20)
                        .required(),

            email: Joi.string()
                        .email() 
                        .required(),

            password: Joi.string()
                        .min(7)
                        .max(15)
                        .required(),

            confirmPass: Joi.ref('password') //matches with password
        })

        //return if given user registration details matches all req of schema
        return schema.validate(data);
    },

    userLoginValidation: async (data) => {
        const schema = Joi.object({
            email: Joi.string()
                        .email() 
                        .required(),

            password: Joi.string()
                        .min(7)
                        .max(15)
                        .required(),
        })
        
        //return if given user login details matches all req of schema
        return schema.validate(data);
    }
} 