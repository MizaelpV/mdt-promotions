import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import EventPicture from '../assets/mainEventPicture.jpeg';
import './styles/EventService.css';

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
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Reprehenderit numquam nobis cumque perferendis obcaecati quaerat
								atque exercitationem ipsa nam aperiam, tempora itaque blanditiis
								nemo animi odit! Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Repellat, vero hic eos id voluptates saepe cum
								omnis libero! Praesentium, eum tenetur! Voluptatem saepe
								laudantium, adipisci cum praesentium in itaque odio!
							</p>
							<div className='contactEventContainer'>
								<a className='contactUs' href='/mdt-promotions#contact'>
									Contact us
								</a>
							</div>
						</div>
					</div>
				</div>
				{/* <Slider /> */}
				<div className='footerEvent'>
					<Footer />
				</div>
			</div>
		</>
	);
};

export default EventService;
