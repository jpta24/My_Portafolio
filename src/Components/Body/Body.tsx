import React from 'react';
import Hero from './Hero';
import Skills from './Skills';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

const Body = () => {
	return (
		<div className='body container-fluid'>
			<Hero />
			<AboutMe />
			<Skills />
			<Projects />
			<Contact />
			<Footer />
		</div>
	);
};

export default Body;
