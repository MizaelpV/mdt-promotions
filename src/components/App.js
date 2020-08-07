import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CarServices from '../pages/CarServices';
import AppBuild from '../pages/AppBuild';
import BoatsService from '../pages/BoatsService';
import EventService from '../pages/EventService';
import './styles/App.css';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/mdt-promotions' component={AppBuild} />
				<Route exact path='/carservices' component={CarServices} />
				<Route exact path='/boatservices' component={BoatsService} />
				<Route exact path='/eventservice' component={EventService} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
