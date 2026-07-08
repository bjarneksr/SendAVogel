import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import { clerkMiddleware } from '@clerk/express'
import fs from 'fs'
import path from 'path'

import { connectDB } from './lib/db.js';
import job from './lib/cron.js'

const app = express();
const PORT = process.env.PORT
const FRONTEND_URL = process.env.FRONTEND_URL;

const publicDir = path.join(process.cwd(), 'public');

app.use(express.json());
app.use(cors({origin:FRONTEND_URL, credentials:true}));
app.use(clerkMiddleware());

app.get('/ping', (req, res) => {
    res.status(200).json({message: 'running'});
})

if (fs.existsSync(publicDir)) {
    app.use(express.static(publicDir));
    app.get('/{*any}', (req, res, next) => {
        res.sendFile(path.join(publicDir, 'index.html'), (error) => next(error));
    });
}

app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}!`)
    connectDB();

    if(process.env.NODE_ENV === 'production') job.start();
});