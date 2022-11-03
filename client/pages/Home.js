import axios from 'axios';
import React, {useState} from 'react';
import { useNavigate } from 'react-router';
import "../style.css";
import doggie from '../images/doggie.gif';



const Home = () => {
	const [username, setUsername] = useState(null);
	const [password, setPassword] = useState(null);
	const [error, setError] = useState(null);

	console.log(username, password);
	const navigate = useNavigate();
	const directToDashboard = (e) => {
		navigate('/Dashboard');

		}
	
	const directToSignup = () => {
		if (!isLogin) {
			navigate("/Signup");
		}
		
	};
	
	const isLogin = false; 
	return (
		
		<div className="Home">
		<center>
			<div id='logo'>
			<img src={doggie}/>
			</div>
			<h1>Woof Pack</h1>

			<form onSubmit={directToDashboard}>
				<input
				type="username"
				id ="username"
				placeholder="username"
				required={true}
				onChange={(e) => setUsername(e.target.value)}
				/>
				<input
				type="password"
				id ="password"
				placeholder="password"
				required={true}
				onChange={(e) => setPassword(e.target.value)}
				/>
				<input id="errorButton"type="submit"/>
				</form>
				<p className="loginSubheader">Don't have a pack? </p>
				<button id="beThatDoggo" type="submit" onClick={directToSignup}>Be That Doggo</button>
				</center>
				
		</div>
	);
};
export default Home;

