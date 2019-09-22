import React, { Component } from 'react';
import './App.css'
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary'

class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchfield:''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({robots: users}));
	}

	onSearchChange= (event) => {
		this.setState({ searchfield: event.target.value})

	}

	render() {
		const { robots, searchfield } = this.state;
		const filterrobots = robots.filter(robot =>{
		return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})

		return !robots.length ?
		 <h1 id='heading' className='tc pa7'>Loading...</h1>
		:(
				<div className='tc vh-100'>
					<h1 id='heading' className='f2 f1-m f-subheadline-l ma0 pt3 pt4-m pt5-l'>ROBOFRIENDS</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
						<ErrorBoundary>
							<CardList robots={filterrobots}/>
						</ErrorBoundary>
					</Scroll>
				</div>
			);
	}
}

export default App;