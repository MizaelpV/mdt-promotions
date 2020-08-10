import React from 'react';
import boatOne from '../assets/boats/boatOne.jpg';
import boatTwo from '../assets/boats/boatTwo.jpg';
import boatThree from '../assets/boats/boatThree.jpg';
import boatFour from '../assets/boats/boatFour.jpg';

const SliderBoats = () => {
	return (
		<>
			<div
				id='carouselExampleIndicators'
				className='carousel slide'
				data-ride='carousel'>
				<ol className='carousel-indicators'>
					<li
						data-target='#carouselExampleIndicators'
						data-slide-to='0'
						className='active'></li>
					<li data-target='#carouselExampleIndicators' data-slide-to='1'></li>
					<li data-target='#carouselExampleIndicators' data-slide-to='2'></li>
					<li data-target='#carouselExampleIndicators' data-slide-to='3'></li>
				</ol>
				<div className='carousel-inner mdtContainer'>
					<div className='carousel-item active'>
						<img className='d-block w-100' src={boatOne} alt='First slide' />
					</div>
					<div className='carousel-item'>
						<img className='d-block w-100' src={boatTwo} alt='Second slide' />
					</div>
					<div className='carousel-item'>
						<img className='d-block w-100' src={boatThree} alt='Third slide' />
					</div>
					<div className='carousel-item'>
						<img className='d-block w-100' src={boatFour} alt='Four slide' />
					</div>
				</div>
				<a
					className='carousel-control-prev'
					href='#carouselExampleIndicators'
					role='button'
					data-slide='prev'>
					<span
						className='carousel-control-prev-icon'
						aria-hidden='true'></span>
					<span className='sr-only'>Previous</span>
				</a>
				<a
					className='carousel-control-next'
					href='#carouselExampleIndicators'
					role='button'
					data-slide='next'>
					<span
						className='carousel-control-next-icon'
						aria-hidden='true'></span>
					<span className='sr-only'>Next</span>
				</a>
			</div>
		</>
	);
};

export default SliderBoats;
