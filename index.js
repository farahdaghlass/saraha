import express from 'express';
import * as dotenv from 'dotenv';
dotenv.config();
import initApp from "./Src/initApp.js"

const app = express();

initApp(app, express);



app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
}); 