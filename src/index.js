import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import CarServices from './pages/CarServices';

ReactDOM.render(
	<React.StrictMode>
		<App />
		{/* <CarServices /> */}
	</React.StrictMode>,
	document.getElementById('root')
);
