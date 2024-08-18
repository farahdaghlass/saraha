
import connectDb from '../DB/connection.js';
import authRouter from './modules/auth/auth.router.js';


const initApp = (app, express) => {
    // Connect to MongoDB
    connectDb();


    app.use(express.json());
    app.use('/auth', authRouter);
    app.use('*', (req, res) => {
        return res.status(404).json({ message: "page not found" });
    })
}
export default initApp