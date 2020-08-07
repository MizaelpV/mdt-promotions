import React from 'react';
import './styles/CarService.css';
import carCover from '../assets/cars/carCover.jpg';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Slider from '../components/SliderCar';

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
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Reprehenderit numquam nobis cumque perferendis obcaecati quaerat
							atque exercitationem ipsa nam aperiam, tempora itaque blanditiis
							nemo animi odit! Lorem ipsum dolor sit amet consectetur
							adipisicing elit. Repellat, vero hic eos id voluptates saepe cum
							omnis libero! Praesentium Lorem, ipsum dolor sit amet consectetur
							adipisicing elit. Quasi voluptas, quas facilis delectus
						</p>

						<div className='contactContainer'>
							<a className='contactUs' href='/mdt-promotions#contact'>
								Contact us
							</a>
						</div>
					</div>
				</div>
			</div>

			{/* <Slider /> */}

			<div className='footerCar'>
				<Footer />
			</div>
		</>
	);
};

export default CarServices;
