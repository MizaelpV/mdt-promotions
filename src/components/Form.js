import React, { Component } from 'react';
import './styles/Form.css';

class Form extends Component {
	render() {
		return (
			<>
				<div id='contact' className='mdtContainer text-white'>
					<div className='formContainer'>
						<div className='textForm'>
							<h2 className='touch'>Get in touch</h2>
							<p>
								Contact us, we offer several services and all of them aim to
								make your idea a reality, you can specify which service you are
								interested in, we will contact you to answer that it can be done
								and that you have a team of professionals in event organization
								who want to meet you to start working together
							</p>
						</div>

						<form id='form' className='mdtContainer  text-white'>
							<div className='form'>
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
									<option defaultValue label=''></option>
									<option defaultValue='Rent a car'>Rent a car </option>
									<option defaultValue='Rent a Yatch'>Rent a Yatch</option>
									<option defaultValue='Party'>Party</option>
								</select>
								<textarea
									className='textTarea'
									name='message'
									id='messageForm'
									cols='30'
									placeholder='Leave yor mesagge'
									rows='8'></textarea>
							</div>
							<div className='btnFormContainer mt-3'>
								<a
									href='/'
									onClick={e => e.preventDefault()}
									className='btn btn-outline-light button btnForm'>
									Contact us
								</a>
							</div>
						</form>
					</div>
				</div>
			</>
		);
	}
}

export default Form;
