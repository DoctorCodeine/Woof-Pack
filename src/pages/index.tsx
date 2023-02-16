import Head from 'next/head';
import Login from './Login';

export default function Home() {
	return (
		<>
			<Head>
				<link
					rel="tab-icon"
					href="/public/favicon.ico"
				/>

				<title>Woof Pack</title>
				<meta
					name="description"
					content="Woof Pack"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
			</Head>
			<div></div>
			<Login />
		</>
	);
}
