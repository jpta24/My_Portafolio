import React from 'react';

import { HiOutlineMail } from 'react-icons/hi';
import { FaWhatsapp, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
	return (
		<div id='contact' className='row text-center skills scrollY'>
			<h2 className='titleSk'>Want to Contact me?</h2>
			<p className='col-md-8 mx-auto'>
				Please use the best way you prefer, I'll be pleased to answer you as
				soon as posible.
			</p>
			<div className='row mx-auto'>
				<a
					className='contactType mx-auto col-md-3'
					href='mailto:jpta5590@gmail.com'
					target='blank'
				>
					<HiOutlineMail className='mx-2 imgCo mailCo' />
					<p className='pCo'>Mail Me</p>
				</a>

				<a
					className='contactType mx-auto col-md-3'
					href='https://wa.link/afybpe'
					target='blank'
				>
					<FaWhatsapp className='mx-2 imgCo phoneCo' />
					<p className='pCo'>Call/Text Me</p>
				</a>

				<a
					className='contactType mx-auto col-md-3'
					href='https://github.com/jpta24'
					target='blank'
				>
					<FaGithub className='mx-2 imgCo githubCo' />
					<p className='pCo'>Follow Me</p>
				</a>

				<a
					className='contactType mx-auto col-md-3'
					href='https://github.com/jpta24'
					target='blank'
				>
					<FaLinkedin className='mx-2 imgCo linkCo' />
					<p className='pCo'>Contact Me</p>
				</a>
			</div>
		</div>
	);
};

export default Contact;
