import React from 'react';
import {Link} from 'react-router-dom'
import NavBar from '../components/NavBar';
import FooterEvent from '../components/FooterEvent';
import boatService from '../assets/yatchMain.jpg';
import './styles/BoatService.css';
import SliderBoats from '../components/SliderBoats';
const BoatsService = () => {
	return (
		<>
			<div className='boatContainer'>
				<NavBar />
				<div className='mdtContainer'>
					<div className='titleBoat'>
						<h1>Rent your Boat</h1>
					</div>
					<div className='serviceBoatContainer'>
						<div className='textBoatService'>
							<p className='p-5'>
								We want to achieve several things, the first is to let you know
								that 71% of the planet's surface is water, and the second is
								that we have available all kinds of water vehicles, boats,
								yachts, jet skis, if it can move on water we can get it for you,
								for your event and for your moment at sea.
							</p>
							<div className='contactBoatContainer'>
								
								<Link className='contactUsBoat' to='/#contact'>
									Contact us
								</Link>
							</div>
						</div>
						<figure className='imgBoatContainer'>
							<img src={boatService} alt='Boat' />
						</figure>
					</div>
				</div>
				<SliderBoats />
				<FooterEvent />
			</div>
		</>
	);
};

export default BoatsService;
