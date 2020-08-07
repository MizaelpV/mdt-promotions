import React from 'react';
import './styles/Layout.css';
import VideoHero from '../assets/videoParty.mp4';
import NavBar from './NavBar';
import Footer from './Footer';

function Layout(props) {
	return (
		<>
			<header id='hero' className='container-layout'>
				<div className='content-video'>
					<video src={VideoHero} loop autoPlay></video>
				</div>
				<div className='container-overlay'></div>
				<NavBar />
			</header>
			{props.children}
			<Footer />
		</>
	);
}

export default Layout;
