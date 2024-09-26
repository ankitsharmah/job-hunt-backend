import cookieParser from 'cookie-parser';
import express from 'express';
import cors from "cors"
import dotenv from 'dotenv';
import connectDb from './utils/db.js';
import userRoute from './routes/user.route.js';
import companyRoute from './routes/company.routes.js';
import jobRouter from "./routes/job.route.js"
import applicationsRoute from './routes/application.router.js'
dotenv.config();

const app = express();

// Correctly use express.json() and express.urlencoded()
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOptions = {
<<<<<<< HEAD
    origin: ['http://localhost:5173', 'https://job-hunt-black.vercel.app'], // Allow both localhost and Vercel
=======
    origin: ['http://localhost:5173', 'https://job-hunt-black.vercel.app','https://btpw85gp-5173.inc1.devtunnels.ms'], // Allow both localhost and Vercel
>>>>>>> c8618824b524462dbf01e39c18cbe8c8614d43a6
    credentials: true
};

app.use(cors(corsOptions));
app.get('/home', (req, res) => {
    return res.status(200).json({
        message: "I'm from backend",
        success: true,
    });
});

const port = process.env.PORT || 8080;

app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRouter);
app.use("/api/v1/application", applicationsRoute);

app.listen(port, () => {
    connectDb();
    console.log(`Running on port ${port}`);
});
