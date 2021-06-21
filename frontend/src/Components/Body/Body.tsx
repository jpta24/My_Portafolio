import React from 'react';
import Hero from './Hero';
import Skills from './Skills';
import AboutMe from './AboutMe';

const Body = () => {
	return (
		<div className='body container-fluid'>
			<Hero />
			<AboutMe />
			<Skills />
		</div>
	);
};

export default Body;
