import React from 'react';
import Hero from './Hero';
import Layout from './Layout';
import Services from './Services';
import AboutUs from './AboutUs';
import './styles/App.css';
import Form from './Form';

function App(props) {
	return (
		<Layout>
			<Hero />
			<Services />
			<AboutUs />
			<Form />
		</Layout>
	);
}

export default App;
