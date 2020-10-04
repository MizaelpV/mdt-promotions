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
            <p>Tlf: +17863405152</p>
            <p>
              Address: 501 golden isles drive, suit 204c hallandale beach fl
              33009
            </p>
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
              <a
                href='https://mizaelpvielma.dev'
                rel='noopener noreferrer'
                target='_blank'
              >
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
