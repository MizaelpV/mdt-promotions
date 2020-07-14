import React from 'react';
import './styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='mdtContainer'>
				<div className='row text-white'>
					<div className='col privacy'>
						<p>Privacy</p>
						<p>Terms</p>
						<p>Address: Address: 382 NE 191st St, Miami, FL 33179-3899, US</p>
					</div>
				</div>
				<div className='row'>
					<div className='col main-social'>
						<div className='social'>
							<FontAwesomeIcon className='icon' icon={faFacebook} />
						</div>
						<div className='social'>
							<FontAwesomeIcon className='icon' icon={faInstagram} />
						</div>
						<div className='social'>
							<FontAwesomeIcon className='icon' icon={faTwitter} />
						</div>
						<div className='author-container'>
							<a href='https://google.com'>
								<p className='author'>Created by mizaelPVielma</p>
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
