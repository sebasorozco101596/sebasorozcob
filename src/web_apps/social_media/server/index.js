
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import { appBarClasses } from '@mui/material';

import postRoutes from './routes/posts.js';

const social_app = express();

social_app.use('/posts', postRoutes);

social_app.use(bodyParser.json({ limit: "30mb", extended: true }));
social_app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
social_app.use(cors());

const { REACT_APP_MONGODB_USER, REACT_APP_MONGODB_PASSWORD } = process.env;

const CONNECTION_URL = `mongodb+srv://sebasorozco1015:Se8451015@cluster0.qm3hb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 3000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => social_app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

//mongoose.set("useFindAndModify", false);

// https://www.mongodb.com/cloud/atlas
