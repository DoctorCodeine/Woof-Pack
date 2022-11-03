import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../style.css';
import { useNavigate } from 'react-router';

const dogApi = 'https://dog.ceo/api/breeds/image/random/50';
const Woofmate = () => {
	const navigate = useNavigate();
	let countSniffs = 0;
	let countNo = 0;
	const likedDog = [];
	const [dogImage, setDogImage] = useState([]);

	useEffect(() => {
		axios
			.get(dogApi)
			.then((data) => {
				setDogImage(data.data.message);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	const handleNo = () => {
		countNo++;
		console.log('Youre doing me a scare');
		window.location.reload(false);
	};

	const storeDogs = () => {
		if (buttSniffed) {
			likedDog.push(dogImage[0]);
			window.location.reload(false);
		}
	};
	const handleBackToDash = () => {
		navigate('/Dashboard');
	};

	const buttSniffed = true;
	return (
		<div className="dogCard">
			<button
				id="woofmate-dash"
				type="submit"
				onClick={handleBackToDash}
			>
				Back To Dashboard
			</button>
			<h1>Find A Woofmate To Join The Pack</h1>
			<div className="card-container">
				<img src={dogImage[0]} />
				<div className="swipeButtons">
					<button
						id="swipeButtonLeft"
						type="submit"
						onClick={handleNo}
					>
						Heckin' no
					</button>
					<button
						id="swipeButtonRight"
						type="submit"
						onClick={storeDogs}
					>
						Sniff The Butt
					</button>
				</div>
			</div>
		</div>
	);
};

export default Woofmate;

/**
 * {this.state.dogProfile.map((profile, index) => <DogProfile src={link for the image} key={index}>)}
 *
 */

/**
 * {dogImage && dogImage.map((dog, i) =>

			 <img src={dog} key={dog.pic}>
			 </img>)}
 */
