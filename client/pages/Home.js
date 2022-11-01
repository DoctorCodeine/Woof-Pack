import React from 'react';
import { useNavigate } from 'react-router';

const Home = () => {
	const navigate = useNavigate();
	const directToDashboard = () => {
		navigate('/Dashboard');
	};

	const directToSignup = () => {
		navigate('/Signup');
	};
	return (
		<div className="Home">
			<h1>Woof Pack</h1>
			<div>
				<h3>Username</h3>
				<input
					type="text"
					name="username"
					placeholder="username"
				/>
			</div>
			<div>
				<h3>Passwoard</h3>
				<input
					type="text"
					name="password"
					placeholder="password"
				/>
			</div>
				<br/>
			<div>
				<button
					className="primary-btn"
					type="submit"
					onClick={directToDashboard}
				>
					Login
				</button>
				<button
				className="signup-btn"
					type="submit"
					onClick={directToSignup}
				>
					Be that Doggo
				</button>
			</div>
		</div>
	);
};
export default Home;
