import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Body from './Components/Body/Body';
import Navbar from './Components/Navbar/Navbar';

import 'bootswatch/dist/cyborg/bootstrap.min.css';
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Navbar />
			<div className=''>
				<Switch>
					<Route exact path='/' component={Body} />
				</Switch>
			</div>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);

reportWebVitals();
