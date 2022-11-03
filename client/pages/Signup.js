 import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import '../style.css';

const Signup = () => {
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);
	const [confirmPassword, setConfirmPassword] = useState(null);
	const [error, setError] = useState(null);
	const [cookies, setCookies, removeCookie] = useCookies(null);

	console.log(email, password, confirmPassword);

	const navigate = useNavigate();

	const directToLogin = (e) => {
		navigate('/');
	};
	const createAccount = async (e) => {
		e.preventDefault();

		try {
			//checking to see if the password matches
			if (isSignUp && (password !== confirmPassword)) {
				setError('My young pawdiwan, your password are not a matching!');
				return;
			}
			// ******* passing Data from to backend
			console.log('***posting****', email, password);
			//posting to backend on server 2000
			// if (isSignUp && (password === confirmPassword)) {
				const res = await axios.post(`http://localhost:2000/${Signup?'signup':'login'}`, {
					email,
					password,
		});
			//if the user is in the database
				const success = res.status == 200;
				console.log(success);
				
				console.log('****this is email****', res.status);
				
				//set the cookies 
				setCookies('Email', res.data.email);
				setCookies('UserId', res.data.userId);
				setCookies('AuthToken', res.data.token);
			// }
			//redirect to dashboard
			if (success && isSignUp) {
				console.log('Signed up in successfully!!!');
				navigate('/Dashboard');
			}
		} catch (error) {
			console.log(error);
			setError('This pack member already exists');
		}
	};

	const isSignUp = true;

	return (
		<div className="Signup">
			<center>
				<h1>Register For A Dog Tag</h1>

				<form onSubmit={createAccount}>
					<input
						type="email"
						id="email"
						name="email"
						placeholder="email"
						required={true}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						type="password"
						id="password"
						name="password"
						placeholder="password"
						required={true}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<input
						type="confirm Password"
						id="confirm Password"
						name="confirm Password"
						placeholder="confirm Password"
						required={true}
						onChange={(e) => setConfirmPassword(e.target.value)}
					/>

					<input
						id="errorButton2"
						type="submit"
					/>
					<p>{error}</p>
				</form>
				<button
					type="submit"
					onClick={directToLogin}
				>
					Back To Login
				</button>
			</center>
		</div>
	);
};
// };
export default Signup;
