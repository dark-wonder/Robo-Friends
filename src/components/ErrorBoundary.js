import React, {Component} from 'react';

//if any of the components like cardlist component fails, errorboundary component can catch the error 
class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false //property
		}

	}

	componentDidCatch(error,info) { //this catches the error
		this.setState({hasError: true})
	}

	render() { //default render
		if(this.state.hasError) { //if this has error return below
			return <h1>Ooopsss. That is not good</h1>
		}
		return this.props.children; //else part, renders whatever's inside error boundary
	}
}

export default ErrorBoundary;