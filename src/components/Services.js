import React from 'react';
import './styles/Services.css';
import Button from './Button';

const Services = () => {
	return (
		<>
			<div className='mdtContainer servicesContainer p-5  text-white text-center mt-5 align-middle'>
				<h2 className='servicesTitle'>Services</h2>
				<div className='row'>
					<div className='col-lg-4'>
						<figure className='img-container'>
							<a href='/services'>
								<img
									src='https://images.pexels.com/photos/271681/pexels-photo-271681.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
									alt='Yatch'
								/>
							</a>
						</figure>
						<div className='btnContainer'>
							<Button content='Boats' />
						</div>
					</div>
					<div className='col-lg-4'>
						<figure className='img-container'>
							<a href='/services'>
								<img
									src='https://images.pexels.com/photos/271681/pexels-photo-271681.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
									alt='Yatch'
								/>
							</a>
						</figure>
						<div className='btnContainer'>
							<Button content='Cars' />
						</div>
					</div>
					<div className='col-lg-4'>
						<figure className='img-container'>
							<a href='/services'>
								<img
									src='https://images.pexels.com/photos/271681/pexels-photo-271681.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
									alt='Yatch'
								/>
							</a>
						</figure>
						<div className='btnContainer'>
							<Button content='Events' />
						</div>
					</div>
				</div>
			</div>
			{/* <Button align='justify-content-center' content='Know more' /> */}
		</>
	);
};

export default Services;
