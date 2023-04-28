import React from 'react';
import { useRouter } from 'next/router';

const Dashboard = () => {
	const router = useRouter();

	return (
		<div>
			<h1>Doggie Dashboard</h1>
			<button onClick={() => router.push('/')}>Go back home</button>
			

		</div>
	);
};

export default Dashboard;
