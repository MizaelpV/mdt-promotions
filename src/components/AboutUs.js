import React from 'react';
import './styles/AboutUs.css';

const AboutUs = () => {
	return (
		<>
			<div id='aboutUs' className='containerAbout text-center text-white'>
				<figure className='figure'>
					<img
						className='imgAbout'
						src='https://images.pexels.com/photos/248747/pexels-photo-248747.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
						alt=''
					/>
					<div className='aboutText'>
						<h3>Our Mission</h3>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
							soluta dolores aspernatur sint odit omnis exercitationem, nobis
							voluptas delectus magnam debitis aut odio sapiente consequuntur
							repellendus blanditiis facere, sit ex!
						</p>
					</div>
				</figure>
			</div>
		</>
	);
};

export default AboutUs;
