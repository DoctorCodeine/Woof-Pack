import React from 'react';
import { useNavigate } from 'react-router';


const Dashboard = () => {
	const navigate = useNavigate();

	const findingWoofmate = () => {
		navigate('/Woofmate');
}

	return (
		<div>
			<h1>Dashboard</h1>

			<div>
				<button type="submit">My Pack</button>
			</div>
			<br />
			<div>
				<button type="submit">Sniff Messages</button>
			</div>
			<br />
			<div>
				<button type="submit" onClick={findingWoofmate}> Find A Woofmate</button>
			</div>
			<br />
			<div>
				<button type="submit">Level</button>
			</div>
			<br />
			<div>
				<button type="submit">Edit Dog Tag</button>
			</div>
		</div>
	);
};


export default Dashboard;
