import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import { db, port } from './config/config.js';
import routes from './routes.js';

dotenv.config();

const app = express();
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(morgan('combined'));
app.use(cors());
app.enable('trust proxy');
app.use(bodyParser.json({ type: '*/*' }));

app.use('/api', routes);

app.listen(port, () => {
  console.log(`Server started on   + ${port}`);
});
