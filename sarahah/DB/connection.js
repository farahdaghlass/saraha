import mongoose from "mongoose";
const connectDb = async () => {

    try {
        return await mongoose.connect(process.env.DB_LACAL);
        console.log('Connected to the local MongoDB database');

    } catch (err) {
        console.log('Error  to connect database', err);

    }
}
export default connectDb;