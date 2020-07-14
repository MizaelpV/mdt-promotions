import React, { Component } from 'react';
import './styles/Hero.css';
import Button from './Button';

class Hero extends Component {
	render() {
		return (
			<div className='heroContainer'>
				<div className='heroText'>
					<h1>Welcome to</h1>
					<span className='mdtName'>MDT-Promotions</span>
					<h2>Are you planning an event?</h2>
					<p>We definetely can your dreams true</p>
					<Button align='justify-content-center' content='Contact us' />
				</div>
			</div>
		);
	}
}

export default Hero;
