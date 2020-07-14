import React, { Component } from 'react';
import './styles/Form.css';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';

class Form extends Component {
	render() {
		return (
			<form>
				<div className='mdtContainer text-white' id='form'>
					<h2 className='touch'>Get in touch</h2>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
						provident iusto
					</p>
				</div>
				<div className='mdtContainer text-white'>
					<div className='row'>
						<div className='col-lg-7 form'>
							<label>Name</label>
							<input type='text' />
							<label className='mt-4'>Email</label>
							<input type='email' name='' id='email' />
							<label className='mt-4'>Select your event</label>
							<select
								className='selectpicker'
								placeholder='Select your '
								name='select'
								data-show-icon='true'>
								<option selected label=''></option>
								<option value='Rent a car'>Rent a car </option>
								<option value='Rent a Yatch'>Rent a Yatch</option>
								<option value='Party'>Party</option>
							</select>
							<textarea
								className='textTarea'
								name='message'
								id='messageForm'
								cols='30'
								rows='8'></textarea>
							<span>Leave your message</span>
						</div>

						<div>
							<FontAwesomeIcon icon={faMoneyBill} style={{ color: 'pink' }} />
						</div>
					</div>

					<Button align='justify-content-center' content='Contact us' />
				</div>
			</form>
		);
	}
}

export default Form;
