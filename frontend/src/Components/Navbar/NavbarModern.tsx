import React from 'react';

import { Container, Nav, NavDropdown } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';

import logo from '../Body/Assets/coding_icon_color.png';

const NavbarModern = () => {
	return (
		<Navbar
			variant='dark'
			bg='dark'
			collapseOnSelect
			expand='md'
			fixed='top'
			className='py-1'
		>
			<Container className='justify-content-end'>
				<Navbar.Toggle
					aria-controls='responsive-navbar-nav'
					className='justify-content-center'
				/>
				<Navbar.Collapse
					id='responsive-navbar-nav'
					className='justify-content-center'
				>
					<Nav
						id='responsive-navbar-nav'
						className='col-md-10 justify-content-center'
					>
						<Nav.Link
							className='col-md-2 text-center my-auto px-2 mx-2 '
							href='#aboutme'
						>
							About Me
						</Nav.Link>
						<Nav.Link
							className='col-md-2 text-center my-auto px-2 mx-2 '
							href='#skills'
						>
							Skills
						</Nav.Link>

						<Navbar.Brand
							href='#hero'
							className='col-md-1 mx-0 col-1 text-center brand'
						>
							<img
								src={logo}
								width='60'
								height='auto'
								className='d-inline-block align-top'
								alt='React Bootstrap logo'
							/>
						</Navbar.Brand>

						<Nav.Link
							className='col-md-2 text-center my-auto px-2 mx-2 '
							href='#projects'
						>
							Projects
						</Nav.Link>
						<Nav.Link
							className='col-md-2 text-center my-auto px-2 mx-2 '
							href='#contact'
						>
							Contact
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavbarModern;
