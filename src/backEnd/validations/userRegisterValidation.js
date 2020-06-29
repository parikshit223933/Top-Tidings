const Joi       = require('@hapi-/joi');

module.exports = {
    userRegisterValidation: async (data) => {
        const schema = Joi.object({
            name: Joi.string()
                    .max(20)
                    .alphanum()
                    .required(),

            email: Joi.string()
                    .email() 
                    .required(),

            password: Joi.string()
                        .min(7)
                        .max(15)
                        .required(),

            confirmedPass: Joi.ref('password') //matches with password
        })
        
        //return if given user details matches all req of schema
        return Joi.validate(data, schema);
    }
} 