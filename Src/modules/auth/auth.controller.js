import bcrypt from 'bcryptjs';
import userModel from "../../../DB/models/User.model.js"
import { sendEmail } from '../../Utils/SendEmail.js';
//import jwt from 'jsonwebtoken'


export const Register = async (req, res) => {
    try {
        const { userName, email, password } = req.body;
        const user = await userModel.findOne({ email })
        if (user) {
            return res.status(409).json({ message: " email exists" });
        }

        const hashedPassword = bcrypt.hashSync(password, parseInt(process.env.SALT_ROUNDS));
        const html = ` <div>
        <p>  Dear ${userName}</p>
        <h1  style = 'background-color:teal;width: 50%'> Wellcome </h1>
        <h2>  New Account </h2>
        <p>  You have successfully created an account </p>
        <p> hello ${userName}</p>
        </div>`

        sendEmail(email, ' WELLCOME FARAOOH', html);
        await userModel.create({ userName, email, password: hashedPassword });
        return res.status(201).json({ message: "success" })
    } catch (err) {
        return res.status(500).json({ message: "catch error", error: err.stack })
    }
}

export const login = async (res, req) => {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });

    if (!user) {
        return res.status(404).json({ message: "user not found" });
    }
    const match = bcrypt.compareSync(password, user.password);

    if (!match) {
        return res.status(404).json({ message: "user not found" })

    }
    const token = await jwt.sign({ id: user._id }, process.env.LOGIN_SIGNATURE, { expiresIn: '1h' })

    return res.status(200).json({ message: "success", token });

};