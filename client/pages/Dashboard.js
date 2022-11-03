import React from 'react';
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import yoshi from '../images/yoshi.gif';

const Dashboard = () => {
	const [user, setUser] = useState(null);
	const navigate = useNavigate();
	const [cookies, setCookie, removeCookie] = useCookies(['user']);

	const handleMyPack = () => {
		navigate('/MyPack');
	};
	const findingWoofmate = () => {
		navigate('/Woofmate');
	};
	const dogTag = (e) => {
		e.preventDefault();
		navigate('/EditDogTag');
	};

	//Get the information about the current user loginning
	//'UserId', res.data.userId
	/*
		const data = {
	user_id: generatedUserId,
	hashed_Password: hashedPassword,
	email: sanitizedEmail,
};
	*/
	const userId = cookies.UserId;
	const getUser = async () => {
		try {
			const res = await axios.get('http://localhost:2000/user', {
				params: { userId },
			});

			setUser(res.data);
			// console.log(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getUser();
	}, [user]);

	console.log('user', user);
	console.log('userId', userId);
	return (
		<div className="Dashboard">
			<h1>Dashboard</h1>

			<div>
				<button
					type="submit"
					onClick={handleMyPack}
				>
					My Pack
				</button>
			</div>
			<br />
			<div>
				<button type="submit">Sniff Messages</button>
			</div>
			<br />
			<div>
				<button
					type="submit"
					onClick={findingWoofmate}
				>
					{' '}
					Find A Woofmate
				</button>
			</div>
			<br />
			<div>
				<button type="submit">Level</button>
			</div>
			<br />
			<div>
				<button
					type="submit"
					onClick={dogTag}
				>
					Edit Dog Tag
				</button>
			</div>

			<img
				id="yoshi"
				src={yoshi}
			/>
		</div>
	);
};

export default Dashboard;
