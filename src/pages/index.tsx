import Head from 'next/head';
import Login from './Login';


export default function Home() {
	return (
		<>
			<Head>
				<title>Woof Pack</title>
				<meta
					name="description"
					content="Woof Pack"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
					<link
						rel="icon"
						type="image/png"
						href="/image/favicon.ico"
					/>
			</Head>
			<div>
			<Login />
			</div>
		</>
	);
}
