import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
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
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Reprehenderit numquam nobis cumque perferendis obcaecati quaerat
								atque exercitationem ipsa nam aperiam, tempora itaque blanditiis
								nemo animi odit! Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Repellat, vero hic eos id voluptates saepe cum
								omnis libero! Praesentium, eum tenetur! Voluptatem saepe
								laudantium, adipisci cum praesentium in itaque odio!
							</p>
							<div className='contactBoatContainer'>
								<a className='contactUsBoat' href='/mdt-promotions#contact'>
									Contact us
								</a>
							</div>
						</div>
						<figure className='imgBoatContainer'>
							<img src={boatService} alt='Boat' />
						</figure>
					</div>
				</div>
				<SliderBoats />

				<div className='footerBoat'>
					<Footer />
				</div>
			</div>
		</>
	);
};

export default BoatsService;
