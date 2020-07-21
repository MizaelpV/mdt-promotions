import React from 'react';
import './styles/Services.css';
import yatch from '../assets/miami-beachYatch.jpg';
import toast from '../assets/toastingNocenter.jpg';
import car from '../assets/carmiami.jpg';
const Services = () => {
	return (
		<>
			<div className='mdtContainer   p-5  text-white text-center mt-5 align-middle'>
				<div className='servicesContainer'>
					<h2 className='servicesTitle'>Services</h2>
					<div className='row mt-4'>
						<div className='col-lg-4'>
							<figure className='img-container'>
								<a href='/services'>
									<img src={car} alt='Car' />
								</a>
							</figure>
							<div className='btnContainer'>
								<a
									href='/cars'
									onClick={e => e.preventDefault()}
									className='btn btn-outline-light buttonServices'>
									Cars
								</a>
							</div>
						</div>
						<div className='col-lg-4'>
							<figure className='img-container'>
								<a href='/services'>
									<img className='center' src={yatch} alt='Yatch' />
								</a>
							</figure>
							<div className='btnContainer'>
								<a
									href='/boats'
									onClick={e => e.preventDefault()}
									className='btn  btn-outline-light buttonServices'>
									Boats
								</a>
							</div>
						</div>
						<div className='col-lg-4'>
							<figure className='img-container'>
								<a href='/services'>
									<img src={toast} alt='Yatch' />
								</a>
							</figure>
							<div className='btnContainer'>
								<a
									href='/events'
									onClick={e => e.preventDefault()}
									className='btn  btn-outline-light buttonServices'>
									Events
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Services;
