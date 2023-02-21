import Image from 'next/image';
import { Bungee_Inline } from '@next/font/google';
import styles from '../styles/Login.module.scss';
import logo from 'public/doggie.gif';
import { useRouter, redirect } from 'next/navigation';
import {useState, useEffect, ReactElement} from 'react';


import {
	MantineProvider,
	PasswordInput,
	TextInput,
	Text,
	Group,
	Anchor,
	Center,
	Button,
} from '@mantine/core';

const bungee = Bungee_Inline({
	weight: '400',
	subsets: ['latin'],
});

const Login = () => {
	const router = useRouter();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const getLoginInfo = async (event: {preventDefault:()=> void}) => {
		event.preventDefault();

		try { 
			const response = await fetch('/pup/signin', 
				{
					method: 'POST',
					headers:{'Content-Type': 'application/json'},
					body: JSON.stringify({
						email,
						password
					})
				});
				const data = await response.json();
				if (data.status === 200 && isLoggedIn) {
					router.push('/dashboard')
					
				}
		}
		catch (error) {
			alert('User cannot be found');
			console.log(error);
		}
	};

	useEffect(() => {
		if (email && password) {
			redirect('/dashboard')
		}
	},[email,password]);

	const handleLogin = (event: {preventDefault:() => void}) => {
		event.preventDefault();
		router.push('/dashboard');
	}
	const isLoggedIn = true;
	return (
		<>
			<MantineProvider
				theme={{
					fontFamily: 'sans-serif',
					spacing: { xs: 15, sm: 20, md: 25, lg: 30, xl: 40 },
				}}
			>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
					}}
				>
					<Image
						src={logo}
						alt="logo"
						id="dogLogo"
						height="150"
					/>
				</div>

				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
					}}
				>
					<h1
						style={{
							fontFamily: 'Bungee Inline',
							textAlign: 'center',
							color: '#fba92c',
						}}
					>
						Woof Pack
					</h1>
				</div>
			<form onSubmit={getLoginInfo}>
					<div
					className="login-form"
					style={styles}
						>
					<Group>
						<Text
							component="label"
							htmlFor="email"
							size="md"
							weight={500}
						>
							Email
						</Text>
						<Anchor
							onClick={(e) => e.preventDefault()}
							sx={(theme) => ({
								paddingTop: 2,
								color:
									theme.colors[theme.primaryColor][
										theme.colorScheme === 'dark' ? 4 : 6
									],
								fontWeight: 500,
								fontSize: theme.fontSizes.xs,
							})}
						>
							Forgot Email?
						</Anchor>
					</Group>
					<TextInput
						type='email'
						placeholder="Email"
						id="email"
						required
						onChange={(event)=>{setEmail(event.target.value)}}
					/>
					<Group>
						<Text
							component="label"
							htmlFor="password"
							size="md"
							weight={500}
						>
							Passowrd
						</Text>
						<Anchor
							onClick={(e) => e.preventDefault()}
							sx={(theme) => ({
								paddingTop: 2,
								color:
									theme.colors[theme.primaryColor][
										theme.colorScheme === 'dark' ? 4 : 6
									],
								fontWeight: 500,
								fontSize: theme.fontSizes.xs,
							})}
						>
							Forgot your password?
						</Anchor>
					</Group>
					<PasswordInput
						type='password'
						placeholder="Password"
						id="password"
						required
						onChange={(event)=>{setPassword(event.target.value)}}
					/>
					<Center>
					<div>
						<Group sx={({marginTop: 10})}>

							<Button
							type ='submit'
							onClick={handleLogin}
							>
								Login
							</Button>

							<Button
							type ='submit'
							onClick={() => router.push('/getADogTag')}
							>
								Get A Dog Tag
							</Button>
						</Group>
					</div>
					</Center>
				</div>
				</form>
			</MantineProvider>
		</>
	);
};

export default Login;