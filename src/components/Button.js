import React from 'react';
import './styles/Button.css';
import './styles/Services.css';

const Button = props => {
	return (
		<div>
			<div className={`mt-3 d-flex ${props.align} ${props.size}`}>
				<div className='row'>
					<div className='col'>
						<a
							href={props}
							onClick={e => e.preventDefault()}
							className='btn p-3 btn-outline-light button'>
							{props.content}
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Button;
