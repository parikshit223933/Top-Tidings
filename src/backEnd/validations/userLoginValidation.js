const Joi       = require('@hapi-/joi');

module.exports = {
    userLoginValidation: async (data) => {
        const schema = Joi.object({
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