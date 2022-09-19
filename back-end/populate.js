import 'dotenv/config';
import connectDB from './db/connect.js';
import DataItem from './models/data.js';
import jsonData from './dataJson.json' assert { type: 'json' };

//function for adding data to mongodb from local json data

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log('Connect success');
    await DataItem.deleteMany();
    await DataItem.create(jsonData);
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
