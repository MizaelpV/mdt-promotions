import React from 'react';
import './styles/Slider.css';
import carOne from '../assets/cars/car1.jpg';
import carTwo from '../assets/cars/car2.jpg';
import carThree from '../assets/cars/car3.jpg';
import carFour from '../assets/cars/car4.jpg';

const SliderCar = () => {
	const images = [
		// carOne,
		// carTwo,
		// carThree,
		// carFour,
		'https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
	];
	let cont = 0;

	const forwardImage = () => {
		if (cont >= images.length - 1) {
			cont = 0;
		} else {
			cont++;
		}
		rendering(cont);
	};

	const backwardImage = () => {
		if (cont <= 0) {
			cont = images.length - 1;
		} else {
			cont--;
		}
		rendering(cont);
	};

	const rendering = () => {
		let imageContain = document.getElementById('imageContain');
		imageContain.src = images[cont];
	};

	return (
		<>
			<div className='mdtContainer mt-5'>
				<div className='sliderContainer'>
					<img id='imageContain' src={carOne} alt='cars' />
					<div className='btnContainerSlider'>
						<button className='btnForward' onClick={forwardImage}>
							←
						</button>
						<button className='btnBackward' onClick={backwardImage}>
							→
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default SliderCar;
