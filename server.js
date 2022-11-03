//aquiring framework
const express = require('express');

const { MongoClient } = require('mongodb');
const URI =
	'mongodb+srv://aimeen:aimee@cluster0.7ca5e6y.mongodb.net/?retryWrites=true&w=majority';

//package that generates tokens
const { v4: uuid4 } = require('uuid');
//using express
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const { append } = require('vary');
const app = express();

//server to look at changes
const PORT = 2000;

app.use(cors());
app.use(express.json());

//route handlers get/send HTTP requests
app.get('/', (req, res) => {
	res.json('This is the Woof Pack Home Page');
});

//* R */
//finding user
app.post('/login', async (req, res) => {
	const client = new MongoClient(URI);
	const { email, password } = req.body;

	try {
		await client.connect();
		const database = client.db('app-data');
		const users = database.collection('users');

		const user = await users.findOne({ email });
		// const hashedPassword = bcrypt.hash(password, 10);

		const correctPassword = await bcrypt.compare(
			password,
			user_id.hashed_Password
		);

		if (user && correctPassword) {
			//generate token
			res.send('Successful Login');
			res.status(200).json({ userId: user.user_id });
		}
		res.status(400).send('Invalid Credentials');
	} finally {
		client.close();
	}
});

app.get('/signup', (req, res) => {
	res.sendStatus(200);
});
//* C */
app.post('/signup', async (req, res) => {
	const client = new MongoClient(URI);
	const { email, password } = req.body;

	//When the user signs up
	const generatedUserId = uuid4();

	//automatic generation of salt
	const hashedPassword = bcrypt.hash(password, 10);

	try {
		//connect to DB
		await client.connect();
		//access users of the DB
		const database = client.db('app-data');
		const users = database.collection('users');
		console.log(req.body);
		//if the user exist -find it by email
		const existingUser = await users.findOne({ email });
		if (existingUser) {
			//response with 409 conflict error
			return res.status(409).send('This pack member exist. Please login');
		}

		//making sure line 44 works -user name should always be lowered cased
		const sanitizedEmail = email.toLowerCase();

		//schema for new user
		const data = {
			user_id: generatedUserId,
			hashed_Password: hashedPassword,
			email: sanitizedEmail,
		};
		console.log('this is the data', data);
		//making new instance of users in the document
		const insertedUser = await users.insertOne(data);
		console.log(insertedUser);

		//generate token -know that youre log into app
		// const token = jwt.sign(JSON.stringify(insertedUser), sanitizedEmail, {
		// 	expiresIn: 60 * 24,
		// });
		// console.log("token", token);

		return res
			.status(200)
			.json({ userId: generatedUserId, email: sanitizedEmail });
	} catch (error) {
		console.log('response is not being sent ', error);
	}
});

//* R */ //get all users
app.get('/users', async (req, res) => {
	// res.send('hello users');
	const client = new MongoClient(URI);
	const userId = req.params.userId;
	console.log(userId);
	try {
		await client.connect();
		const database = client.db('app-data');
		const users = database.collection('users');
		const returnedUsers = await users.find().toArray();
		res.send(returnedUsers);
	} finally {
		client.close();
	}
});

//* R */ //Finding a user
app.get('/user', async (req, res) => {
	const client = new MongoClient(URI);
	const userId = req.query.userId;

	try {
		await client.connect();
		const database = client.db('app-data');
		const users = database.collection('users');
		const query = { user_id: userId };
		const user = await users.findOne(query);
		res.send(user);
		console.log('user', userId);
	} finally {
		client.close();
	}
});

//* U */ //update user information
app.put('/user', async (req, res) => {
	const client = new MongoClient(URI);
	//Information the user inputs into the form div
	const updateData = req.body.updateData;
	console.log(updateData);

	try {
		await client.connect();
		const database = client.db('app-data');
		const users = database.collection('users');
		//querying db
		const updatedUser = { user_id: updateData.user_id };

		const updateDoc = {
			$set: {
				// first_name: updateData.first_name,
				email: updateData.email,
			},
		};
		//update one of the users in data
		const insertedUser = await users.updateOne(updatedUser, updateDoc);
		console.log('this is the updated user', insertedUser);

		res.json(insertedUser);
	} finally {
		await client.close();
	}
});

//*D/ //Delete a user
app.delete('/users', async (req, res) => {
	const client = new MongoClient(URI);
	const deleteData = req.params.deleteData;
	// console.log(deleteData);
	try {
		await client.connect();
		const database = client.db('app-data');
		const users = database.collection('users');
		const deleteUser = await users.deleteOne(deleteData);
		console.log(deleteUser);
		res.send(deleteUser);
	} finally {
		client.close();
	}
});

//Informs what server is being used
app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});
module.exports = app;
