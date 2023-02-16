import React from 'react';

import { Bungee_Inline } from '@next/font/google';
import {useState, useEffect} from 'react';


const bungee = Bungee_Inline({
	weight: '400',
	subsets: ['latin'],
});


const Dashboard = () => {

	return (
		<div>
			<h1>Dashboard</h1>
		</div>
	);
};

export default Dashboard;
