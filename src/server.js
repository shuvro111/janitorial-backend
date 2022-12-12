import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import { db, port } from './config/config';
import routes from './routes';

dotenv.config();

const app = express();
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.enable('trust proxy');
app.use(bodyParser.json({ type: '*/*' }));

app.use('/api', routes);
app.all('/', (req, res) => {
  console.log('Just got a request!');
  res.send('Yo!');
});

app.listen(port, () => {
  console.log(`Server started on   + ${port}`);
});
