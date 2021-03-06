import React, { Component } from 'react';
import './styles/Hero.css';
import Button from './Button';

class Hero extends Component {
	render() {
		return (
			<div className='heroContainer'>
				<div className='heroText'>
					<span>Welcome to</span>
					<h1 className='mdtName'>MDT Promotions</h1>
					<h2>Are you planning an event?</h2>
					<p>
						We can make your dreams come true
						<span role='img' aria-label='fire'>
							🔥
						</span>
					</p>
					<Button
						align='justify-content-center'
						content='Contact us'
						className='firstBtn'
						go='#contact'
					/>
				</div>
			</div>
		);
	}
}

export default Hero;
