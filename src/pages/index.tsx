import Head from 'next/head';
import Image from 'next/image';
import { Bungee_Inline } from '@next/font/google';
import styles from 'woofpack2/styles/Login.module.scss';
import logo from 'public/doggie.gif';
import { useRouter } from 'next/navigation';

import {
	MantineProvider,
	PasswordInput,
	TextInput,
	Text,
	Group,
	PasswordInputProps,
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
	return (
		<>
			<MantineProvider
				theme={{
					fontFamily: 'sans-serif',
					spacing: { xs: 15, sm: 20, md: 25, lg: 30, xl: 40 },
				}}
			>
				<Head>
					<link
						rel="tab-icon"
						href="/public/favicon.ico"
					/>

					<title>Woof Pack</title>
				</Head>
				{/* Logo */}
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
						placeholder="Email"
						id="email"
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
						placeholder="Password"
						id="password"
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
			</MantineProvider>
		</>
	);
};

export default Login;
