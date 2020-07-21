import React from 'react';
import './styles/Slider.css';

const Slider = () => {
	const images = [
		'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
		'https://images.pexels.com/photos/241316/pexels-photo-241316.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
		'https://images.pexels.com/photos/210182/pexels-photo-210182.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
		'https://res.cloudinary.com/twenty20/private_images/t_standard-fit/v1521838657/photosp/868b373c-b17c-464e-a842-7582a9f0b4c5/868b373c-b17c-464e-a842-7582a9f0b4c5.jpg'
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
					<img
						id='imageContain'
						src='https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
						alt=''
					/>
					<div className='btnContainerSlider'>
						<button className='btnForward' onClick={forwardImage}>
							backward
						</button>
						<button className='btnBackward' onClick={backwardImage}>
							forward
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Slider;
