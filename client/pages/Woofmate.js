import React, { Component } from 'react';
import axios from 'axios';
import DogProfile from '../components/DogProfile';

//dogs gone wild
//count = index of array
//state preservation
//context hook
//reset state

class Woofmate extends Component {
	constructor() {
		super();
		this.state = {
			dogPics: [],
			box: { width: '450px', height: '500px', border: '1px solid blue' },
		};
		
	}

 componentDidMount() {
		const dogApi = 'https://dog.ceo/api/breeds/image/random/50';
	
		const test = async () => {
			try {
				const res = await axios.get(dogApi)
				this.setState({ dogPics: res.data.message });
			}
			catch (err) {
				console.log(err);
			}
		 }  
		// axios.get(dogApi)
			// .then((data) => {
      //   console.log(data.data.message, "message");
			// 	this.setState({ dogPics: data.data.message });
			// })
			// .catch((err) => {
			// 	console.log(err);
			// });
			test();
	}
	// getProfile() {
	// 	let dogProfile = [];
	// 	for (let i = 0; i < this.state.dogPics.length; i++) {
	// 		// console.log('this dog ', this.state.dogPics[i]);
	// 		dogProfile.push(
	// 			<DogProfile
	// 				profile={this.state.dogPics[i]}
	// 				key={i}
	// 			/>
	// 		);
	// 	}

		// return dogProfile;
	// }


	render() {
		return (
			<div>
				<h1>Woofmate</h1>
				<div
					style={this.state.box}
					id={'#DogProfile'}
				>
					<button type="submit">No</button>
					<button type="submit">Sniff The Butt</button>
				</div>
				<div>
					 {this.state?.dogPics?.map((profile, index) => (<DogProfile src={profile} key={index} />))}	
				</div>
			</div>
		)
	}
}


export default Woofmate;

// const getDogs = () => {

//     const dogApi = 'https://dog.ceo/api/breeds/image/random/10';
//     axios.get(dogApi)

//     .then((data) => {
//       console.log(data)
//     })
//     .catch((err) => {
//       console.log(err)
//     });

// }

// function Woofmate() {

//   let countSniffs = 0;

//     const handleSniffButton = () => {

//       countSniffs++;
//       console.log(`Number of Sniffs ${countSniffs}`);
//       console.log('Sniffing butt');
//     }

//      const handleNoButton = () => {
//       console.log('Leaving...');
//     }

//     return (
//       <div>
//       <h1>Woofmate</h1>
//       <div className="profileContainer"
//       styles={styles.box}>
//       </div>

//       <button type="submit" className ="left-no" onClick={handleNoButton}>No</button>
//       <button type="submit" className="right-yes" onClick={handleSniffButton}>Sniff The Butt</button>

//       </div>
//     );

// };

// const styles = {
//   box: {width: '300px', height: '100px', border: '1px solid blue'}
// }
// getDogs();
// Woofmate();

/**
 *     const dogApi = 'https://dog.ceo/api/breeds/image/random';

    fetch(dogApi)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
 */
/**
 * {this.state.dogProfile.map((profile, index) => <DogProfile src={link for the image} key={index}>)}
 * 
 */