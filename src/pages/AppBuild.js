import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import AboutUs from '../components/AboutUs';
import Form from '../components/Form';
import Layout from '../components/Layout';

const AppBuild = () => {
	return (
		<>
			<Layout>
				<Hero />
				<Services />
				<AboutUs />
				<Form />
			</Layout>
		</>
	);
};

export default AppBuild;
