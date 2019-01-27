import React, { Component } from 'react';
import './App.css'
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';


class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchfield:''
		}
		console.log('constructor');
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({robots: users}));
		console.log('componentDidMount');
	}

	onSearchChange= (event) => {
		this.setState({ searchfield: event.target.value})

	}

	render() {
		const filterrobots=this.state.robots.filter(robots =>{
		return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		console.log(filterrobots);
		console.log('render');

		if(this.state.robots.length===0) {
			return <h1 id='heading' className='tc pa7'>Loading...</h1>
		} 
		else {
			return (
				<div className='tc'>
					<h1 id='heading'>ROBOFRIENDS</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
						<CardList robots={filterrobots}/>
					</Scroll>
				</div>
			);
		}
		
	}
	
}

export default App;