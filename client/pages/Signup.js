import React from 'react';
import { useNavigate } from 'react-router';
const Signup = () => {
	const navigate = useNavigate();

	const directToLogin = () => {
		navigate('/');
	}
	const createAccount = () => {
		navigate('/Dashboard');
	}
	return (
		<div className='Signup'>
		<h1>Resigter For A Dog Tag</h1>
		<div>
		<h3>Create Username</h3>
		<input
		type="text"
		name="username"
		placeholder=""
	/>
		</div>

		<div>
			<h3>Create a Password</h3>
			<input
		type="text"
		name="password"
		placeholder=""
	/>
		</div>
		<br/>
		<div>
			<button className="primary-btn" type="submit" onClick={directToLogin}>Back To Login</button>
	
			<button className="create-account-btn" type="submit" onClick={createAccount}>Create Account</button>
		</div>
		</div>
	)
	
};
export default Signup;
