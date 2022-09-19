import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const dataSchema = new Schema({
  title: { type: String, required: [true, 'provide title name'] },
  salary: { type: String },
  count: { type: Number },
  color: { type: String, required: [true, 'provide color'] },
});

export default mongoose.model('DataItem', dataSchema);