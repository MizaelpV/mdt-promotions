import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import './styles/FooterEvent.css';

const FooterEvent = () => {
	return (
		<footer className='footerEvent'>
			<div className='mdtContainer'>
				<div className='row text-white'>
					<div className='col privacyEvent'>
						<p>Privacy</p>
						<p>Terms</p>
						<p>Address: Address: 382 NE 191st St, Miami, FL 33179-3899, US</p>
					</div>
				</div>
				<div className='row'>
					<div className='col mainSocialEvent'>
						<div className='socialEvent'>
							<FontAwesomeIcon className='iconEvent' icon={faFacebook} />
						</div>
						<div className='socialEvent'>
							<FontAwesomeIcon className='iconEvent' icon={faInstagram} />
						</div>
						<div className='socialEvent'>
							<FontAwesomeIcon className='iconEvent' icon={faTwitter} />
						</div>
						<div className='authorContainerEvent'>
							<a href='https://mizaelpvielma.dev'>
								<p className='authorEvent'>Created by mizaelPVielma</p>
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default FooterEvent;
