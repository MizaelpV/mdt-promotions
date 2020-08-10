import React from 'react';
import './styles/SliderCar.css';

import carOne from '../assets/cars/carOne.jpg';
import carTwo from '../assets/cars/carTwo.jpg';
import carThree from '../assets/cars/carThree.jpg';
import carFour from '../assets/cars/carFour.jpg';
import carFive from '../assets/cars/carFive.jpg';
import carSix from '../assets/cars/carSix.jpg';

const SliderCar = () => {
	return (
		<>
			<div
				id='carouselExampleIndicators'
				className='carousel slide'
				data-ride='carousel'>
				<ol className='carousel-indicators'>
					<li
						data-target='#carouselExampleIndicators'
						data-slide-to='0'
						className='active'></li>
					<li data-target='#carouselExampleIndicators' data-slide-to='1'></li>
					<li data-target='#carouselExampleIndicators' data-slide-to='2'></li>
					<li data-target='#carouselExampleIndicators' data-slide-to='3'></li>
					<li data-target='#carouselExampleIndicators' data-slide-to='4'></li>
					<li data-target='#carouselExampleIndicators' data-slide-to='5'></li>
				</ol>
				<div className='carousel-inner mdtContainer'>
					<div className='carousel-item active'>
						<img className='d-block w-100' src={carOne} alt='First slide' />
					</div>
					<div className='carousel-item'>
						<img className='d-block w-100' src={carTwo} alt='Second slide' />
					</div>
					<div className='carousel-item'>
						<img className='d-block w-100' src={carThree} alt='Third slide' />
					</div>
					<div className='carousel-item'>
						<img className='d-block w-100' src={carFour} alt='Fourth slide' />
					</div>
					<div className='carousel-item'>
						<img className='d-block w-100' src={carFive} alt='Fourth slide' />
					</div>
					<div className='carousel-item'>
						<img className='d-block w-100' src={carSix} alt='Fourth slide' />
					</div>
				</div>
				<a
					className='carousel-control-prev'
					href='#carouselExampleIndicators'
					role='button'
					data-slide='prev'>
					<span
						className='carousel-control-prev-icon'
						aria-hidden='true'></span>
					<span className='sr-only'>Previous</span>
				</a>
				<a
					className='carousel-control-next'
					href='#carouselExampleIndicators'
					role='button'
					data-slide='next'>
					<span
						className='carousel-control-next-icon'
						aria-hidden='true'></span>
					<span className='sr-only'>Next</span>
				</a>
			</div>
		</>
	);
};

export default SliderCar;
