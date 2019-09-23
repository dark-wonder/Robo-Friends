import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import { searchRobots } from './reducers';

const logger = createLogger(); //middleware for redux
const store = createStore(searchRobots, applyMiddleware(logger)); //searchRobots is a reducer taken from reducers.js. Many reducers are combined to make one rootReducer

//provider component passes down the store to all the components in the app 
//connect component is used to connect the store to others
ReactDOM.render(
	<Provider store={store}> 
		<App />
	</Provider>, document.getElementById('root'));

serviceWorker.unregister();
