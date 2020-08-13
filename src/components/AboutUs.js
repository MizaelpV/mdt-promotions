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
							You are our mission, your experiences, your moments, your
							memories, we want to be there for you, to listen to you and make
							your dreams a reality. We accompany you from the idea to the
							materialization, from a private event, a public event, a wedding,
							a concert, you decide how to get there and we are the tool to make
							it happen, we are eager to listen to you, get in touch, fill out
							the form.
						</p>
					</div>
				</figure>
			</div>
		</>
	);
};

export default AboutUs;
