import React from 'react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Bungee_Inline } from '@next/font/google';
import styles from '../styles/Login.module.scss';
import logo from 'public/doggie.gif';
import Image from 'next/image';
import { Button } from '@mantine/core';
// import { promises } from 'dns';

const LoginUser = ({ email, password }) => {
  // interface User {
  //   email: string;
  //   password: string;
  // }
	const router = useRouter();
	const [error, setError] = useState('');
	const [inputEmail, setInputEmail] = useState(email);
	const [inputPassword, setInputPassword] = useState(password);


  const findUser = (email: String, password: String) => {
    if (inputEmail === email && inputPassword === password) {
      router.push('/dashboard');
    } else {
      setError('Incorrect username or password. Please try again.');
    }
  };

	const handleLogin = async (e:  React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const response = await fetch('http://localhost:8000/pup/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ email: inputEmail, password: inputPassword}),
			});
			const data = await response.json()
      findUser(data.email, data.password);

		} catch (error) {
			setError('Incorrect username or password. Please try again.');
			console.error(error);
		}
	};

	const handleEmail = (email: string) => {
		setInputEmail(email);
	};

	const handlePassword = (password: string) => {
		setInputPassword(password);
	};

	return (
		<>
			<div>
				<h1>Login Page</h1>
				<form onSubmit={handleLogin}>
					<label>
						Username:
						<input
							type="email"
							name="email"
              required
							onChange={(e) => handleEmail(e.target.value)}
              />
					</label>
					<label>
						Password:
						<input
							type="password"
							name="password"
              required
							onChange={(e) => handlePassword(e.target.value)}
              />
					</label>
					<Button type="submit">Submit</Button>
				</form>
			</div>
		</>
	);
};

export default LoginUser;
