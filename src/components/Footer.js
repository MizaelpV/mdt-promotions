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
            <p>Tlf: +17863405152</p>
            <p>
              Address: 501 golden isles drive, suit 204c hallandale beach fl
              33009
            </p>
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
              <a
                href='https://mizaelpvielma.dev'
                rel='noopener noreferrer'
                target='_blank'
              >
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
