import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Woofmate from './Woofmate';

class App extends Component {
	render() {
		return (
			<div>
				<Woofmate />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
