import mongoose from "mongoose";
import path from "path";
import dotenv from 'dotenv';
import { ErrorRequestHandler } from "express";

mongoose.set('strictQuery', true);

const URI = 'mongodb+srv://aimee:123@cluster0.yu6qveb.mongodb.net/?retryWrites=true&w=majority';

interface User {
  email: String,
  password: String
}

dotenv.config({
	path: path.resolve(__dirname, '../../process.env')
});

mongoose
.connect(URI)
.then(() => console.log('🦆🦆🦆🦆🦆🦆🦆🦆  Mongoose is connected'))
.catch((err: ErrorRequestHandler) => {
	console.log(`Error connecting to Mongo DB: ${err}`);
});
const UserPup = new mongoose.Schema({
	email: {type: String, required: true, unique: true},
	password: {type: String, required: true}
});

export const Pupper = mongoose.model<User>('Pupper', UserPup);


