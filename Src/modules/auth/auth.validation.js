import joi from "joi";
import { genaralFields } from '../../middleware/validation.js';
export const registerSchema = {
    body: joi.object({
        userName: joi.string().min(3).max(40).required().messages({
            "string.empty": 'username is required'
        }),
        email: genaralFields.email,
        password:  genaralFields.password,
        cpassword: joi.valid(joi.ref('password')).required()
    })

}

export const loginSchema = {

    body: joi.object({
        email: genaralFields.email,
        password:  genaralFields.password,
    })

}