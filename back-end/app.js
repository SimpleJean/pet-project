import 'dotenv/config';

import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import connectDB from './db/connect.js';
import dataRouter from './routes/data.js';
import notFound from './middleware/not-found.js';

const app = express();

const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use('/api/v1/data', dataRouter);

app.use(notFound);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Listening on port on ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
