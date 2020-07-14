import React from 'react';
import './styles/Services.css';
import Button from './Button';

const Services = () => {
	return (
		<>
			<div className='mdtContainer servicesContainer p-5  text-white text-center mt-5 align-middle'>
				<div className='row pb-5 pw-5'>
					<div className='text-container align-text-bottom'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius id
						eligendi mollitia fuga tenetur rerum earum eum odit repellendus
						illum saepe ut temporibus ad voluptatem Lorem ipsum dolor sit amet
						consectetur, adipisicing elit. Nihil quam aliquid veritatis, soluta
						deserunt suscipit delectus vel quasi nulla esse optio odit sequi
						quidem voluptatem assumenda odio dolor repellat nam?.
					</div>
				</div>
				<div className='row services'>
					<div className='col-lg-4'>
						<figure className='img-container'>
							<a href='/services'>
								<img
									src='https://images.pexels.com/photos/271681/pexels-photo-271681.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
									alt='Yatch'
								/>
							</a>
						</figure>
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
					</div>
				</div>
			</div>
			<Button align='justify-content-center' content='Know more' />
		</>
	);
};

export default Services;
