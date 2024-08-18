import mongoose, { Schema, model } from "mongoose";

const userSchema = new Schema({

    userName: {
        type: String,
        required: true,

    },
    email: {
        type: String,
        required: true,

    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number
    }
    ,
    gender: {
        type: String,
        enum: ['male', 'Female']
    },
    confirmEmail: {
        type: Boolean,
        default: false,
    }

}, {
    timestamps: true,

});

const userModel = model('User', userSchema);

export default userModel;