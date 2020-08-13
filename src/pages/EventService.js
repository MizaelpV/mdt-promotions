import React from 'react';
import NavBar from '../components/NavBar';
import FooterEvent from '../components/FooterEvent';
import EventPicture from '../assets/mainEventPicture.jpeg';
import './styles/EventService.css';
import SliderEvents from '../components/SliderEvents';

const EventService = () => {
	return (
		<>
			<div className='EventContainer'>
				<NavBar />
				<div className='mdtContainer'>
					<div className='titleEvent'>
						<h1>Book your event</h1>
					</div>
					<div className='serviceEventContainer'>
						<figure className='imgContainerEvent'>
							<img src={EventPicture} alt='Weeding couple' />
						</figure>
						<div className='textEventService'>
							<p>
								We believe in your ability to create, we believe that we are a
								company that focuses on making things happen, focused on meeting
								your expectations and meeting your needs, for this to happen you
								need a team, we will take care of that. We only demand that you
								have a dream, we are a multidisciplinary team that believes that
								anything is possible. We will take care of everything necessary
								to make a unique moment, a unique memory, something that will
								last.
							</p>
							<div className='contactEventContainer'>
								<a className='contactUs' href='/mdt-promotions#contact'>
									Contact us
								</a>
							</div>
						</div>
					</div>
				</div>
				<SliderEvents />

				<FooterEvent />
			</div>
		</>
	);
};

export default EventService;
