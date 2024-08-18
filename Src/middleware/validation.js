 import joi from 'joi';
const dataMethods = ['body', 'params', 'query'];

 export const  genaralFields = {
    email: joi.string().email().min(6).max(50).required(),
    password: joi.string().min(4).required(),
 }



const validation = (Schema) => {
    const validationArray = []
    return (req, res, next) => {
        dataMethods.forEach(key => {
            if (Schema[key]) {

                const validationResult = Schema[key].validate(req[key], { abortErly: false });
                if (validationResult.error) {
                    validationArray.push(validationResult.error.details);
                }

            }
        });

        if (validationArray.length > 0) {
            return res.status(400).json({ message: "Validation error", Errors:validationArray });
        } else {
            next();
        }
    }
};
export default validation;