import Image from 'next/image';
import { Bungee_Inline } from '@next/font/google';
import styles from '../styles/Login.module.scss';
import logo from 'public/doggie.gif';
import { useRouter } from 'next/navigation';
import { use, useState } from 'react';
import LoginUser from './loginUser';



const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	fetch('http://localhost:8000/pup', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	})
	.then((response) => response.json())
	.then((data) => console.log(data))
	.catch((error) => console.log(error));
	
	return(
		<>
		<LoginUser email={email} password={password}/>
		</>
	);
};

export default Login;


