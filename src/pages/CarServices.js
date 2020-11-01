import React from 'react';
import { Link } from 'react-router-dom';
import './styles/CarService.css';
import carCover from '../assets/cars/carCover.jpg';
import NavBar from '../components/NavBar';
import SliderCar from '../components/SliderCar';
import FooterEvent from '../components/FooterEvent';

const CarServices = () => {
	return (
		<>
			<NavBar />
			<div className='mdtContainer'>
				<div className='titleCar'>
					<h1>Rent your car</h1>
				</div>

				<div className='serviceContainer'>
					<figure className='imgContainer'>
						<img src={carCover} alt='Car' />
					</figure>
					<div className='textService'>
						<p>
							For an entrance, for a road, for an exit, the battles are won on
							horseback, do you have any in mind? Do you want to create a unique
							moment? There are no limits in the vehicles that we can get for
							you, your imagination is the road and these four wheels are
							waiting for you to be in exotic mode.
						</p>

						<div className='contactContainer'>
							<Link className='contactUs' to='/#contact'>
								Contact us
							</Link>
						</div>
					</div>
				</div>
			</div>

			<SliderCar />
			<FooterEvent />
		</>
	);
};

export default CarServices;
