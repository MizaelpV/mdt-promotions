import React from 'react';
import './styles/Button.css';

const Button = props => {
	return (
		<div>
			<div className={`container mt-5 d-flex ${props.align} `}>
				<div className='row'>
					<div className='col'>
						<a
							href={props}
							onClick={e => e.preventDefault()}
							className='btn button btn-outline-info '>
							{props.content}
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Button;