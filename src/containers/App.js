import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css'
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

import { setSearchField } from '../actions';

const mapStateToProps = state => {
	return {
		searchField: state.searchField
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch( setSearchField(event.target.value))
	}
}

class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: []
		}
	}


	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({robots: users}));
	}

	render() {
		const { robots } = this.state;
		const { searchField, onSearchChange } = this.props;
		const filterrobots = robots.filter(robot =>{
		return robot.name.toLowerCase().includes(searchField.toLowerCase());
		})

		return !robots.length ?
		 <h1 id='heading' className='tc vh-100'>Loading...</h1>
		:(
				<div className='tc vh-100'>
					<h1 id='heading' className='f2 f1-m f-subheadline-l ma0 pt3 pt4-m pt5-l'>ROBOFRIENDS</h1>
					<SearchBox searchChange={ onSearchChange}/>
					<Scroll>
						<ErrorBoundary>
							<CardList robots={filterrobots}/>
						</ErrorBoundary>
					</Scroll>
				</div>
			);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App); //connect is a higher order function: returns another function which is App in this case