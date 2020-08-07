import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Services.css';
import yatch from '../assets/miami-beachYatch.jpg';
import toast from '../assets/toastingNocenter.jpg';
import car from '../assets/cars/carmiami.jpg';
const Services = () => {
	return (
		<>
			<div
				id='services'
				className='mdtContainer   p-5  text-white text-center mt-5 align-middle'>
				<div className='servicesContainer'>
					<h2 className='servicesTitle'>Services</h2>
					<div className='row mt-4'>
						<div className='col-lg-4'>
							<figure className='img-container'>
								<Link to='/carservices'>
									<img src={car} alt='Car' />
								</Link>
							</figure>
							<div className='btnContainer'>
								<Link
									to='/carservices'
									className='btn btn-outline-light buttonServices'>
									Cars
								</Link>
							</div>
						</div>
						<div className='col-lg-4'>
							<figure className='img-container'>
								<a href='/boatservices'>
									<img className='center' src={yatch} alt='Yatch' />
								</a>
							</figure>
							<div className='btnContainer'>
								<Link
									to='/boatservices'
									className='btn  btn-outline-light buttonServices'>
									Boats
								</Link>
							</div>
						</div>
						<div className='col-lg-4'>
							<figure className='img-container'>
								<Link to='/eventservice'>
									<img src={toast} alt='Yatch' />
								</Link>
							</figure>
							<div className='btnContainer'>
								<Link
									to='/eventservice'
									className='btn  btn-outline-light buttonServices'>
									Events
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Services;
