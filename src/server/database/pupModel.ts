import mongoose from "mongoose";
import path from "path";
import dotenv from 'dotenv';
import { ErrorRequestHandler } from "express";

mongoose.set('strictQuery', true);

const URI = 'mongodb+srv://aimee:123@cluster0.tzumcin.mongodb.net/?retryWrites=true&w=majorityy';

//const URI: string = process.env.MONGOURI!;

interface User {
  email: String,
  password: String
}

dotenv.config({
	path: path.resolve(__dirname, '../../process.env')
});

mongoose
	.connect(URI)
	.then(() => console.log('🦆🦆🦆🦆 Mongoose is connected 🦆🦆🦆🦆'))
	.catch((err: ErrorRequestHandler) => {
		console.log('Error connecting to MongoDB: ', err);
	});

const UserPup = new mongoose.Schema({
	email: {type: String, required: true, unique: true},
	password: {type: String, required: true}
});

const Pupper = mongoose.model<User>('Pupper', UserPup);

export default Pupper;



