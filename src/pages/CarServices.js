import React from 'react';
import './styles/servicesPage.css';
import carServicePage from '../assets/carServicePage.jpg';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Slider from '../components/Slider';

const CarServices = () => {
	return (
		<>
			<NavBar />
			<div className='mdtContainer'>
				<div className='serviceContainer'>
					<figure className='imgContainer'>
						<img src={carServicePage} alt='Car' />
					</figure>
					<div className='textService'>
						<h4>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Reprehenderit numquam nobis cumque perferendis obcaecati quaerat
							atque exercitationem ipsa nam aperiam, tempora itaque blanditiis
							nemo animi odit! Ipsam quas labore aperiam!Doloremque officiis
							minima, placeat maxime mollitia sapiente quaerat quod quibusdam,
							corrupti expedita quas voluptatibus debitis impedit. Illo velit
							tenetur dignissimos modi eius repellendus porro. Possimus tempore
							sint incidunt tempora ratione?
						</h4>
					</div>
				</div>
			</div>
			<Slider />
			<Footer />
		</>
	);
};

export default CarServices;
