import Image from 'next/image';
import { Bungee_Inline } from '@next/font/google';
// import styles from 'woofpack2/styles/Login.module.scss';
import logo from 'public/doggie.gif';
import { useRouter } from 'next/navigation';
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

const Login = (): ReactElement => {
	const router = useRouter();
	// const [email, setEmail] = useState(null);
	// const [password, setPassword] = useState(null);
	const [login, SetLogin] = useState(null);

	useEffect(() => {
		const fetchUserLogin = async ():  Promise<any> => {
			try{ 
				const response: Response = await fetch('/pup/login', {
					method: 'POST',
					headers: {'Content-Type': 'application/json'},
					body: JSON.stringify ({
						
					})
				})

			return response.json() as Promise<{ data: any }>
					
			
			}
			catch(err) {
				console.log(err);
		}

		}
	},[]);

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

				{/* Heading */}
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

	<form action='/dashboard' method='POST'>
	<div
					className="login-form"
					// style={styles}
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
					/>
					<Center>
					<div>
						<Group sx={({marginTop: 10})}>
							<Button
							onClick={() => router.push('./Dashbaord')}
							>Login</Button>
							<Button>Get A Dog Tag</Button>
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