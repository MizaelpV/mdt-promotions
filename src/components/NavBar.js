import React from 'react';
import whiteLogo from '../assets/whiteLogo.png';
import './styles/NavBar.css';

function NavBar() {
	return (
		<div className='container-navbar fixed-top'>
			<div className='mdtContainer'>
				<nav className='navbar navbar-expand-lg navbar-dark'>
					<a className='navbar-brand' href='/'>
						<img src={whiteLogo} alt='Logo' />
					</a>
					<button
						className='navbar-toggler border'
						type='button'
						data-toggle='collapse'
						data-target='#navbarNavAltMarkup'
						aria-controls='navbarNavAltMarkup'
						aria-expanded='false'
						aria-label='Toggle navigation'>
						<span className='navbar-toggler-icon'></span>
					</button>

					<div
						className='collapse navbar-collapse text-center'
						id='navbarNavAltMarkup'>
						<div className='navbar-nav ml-auto'>
							<a className='nav-item nav-link text-white' href='/'>
								Home <span className='sr-only'>(current)</span>
							</a>
							<a className='nav-item nav-link text-white' href='#aboutUs'>
								About us
							</a>
							<a className='nav-item nav-link text-white' href='/'>
								Services
							</a>
							<a
								className='nav-item nav-link text-white'
								href='/'
								tabIndex='-1'>
								Contact
							</a>
						</div>
					</div>
				</nav>
			</div>
		</div>
	);
}

export default NavBar;
