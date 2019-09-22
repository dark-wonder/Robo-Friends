import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import {searchRobots} from './reducers';

const store = createStore(searchRobots);

//provider component passes down the store to all the components in the app 
//connect component is used to connect the store to others
ReactDOM.render(
	<Provider store={store}> 
		<App />
	</Provider>, document.getElementById('root'));

serviceWorker.unregister();
