import React from 'react';

import logo from './Assets/coding_icon_color.png';
import photo from './Assets/photo.png';

const Hero = () => {
	return (
		<div id='hero' className='hero scrollY'>
			<div className='hero-content'>
				<div>
					<img className='logo' src={logo} alt='hello' />
				</div>
				<div>
					<img className='photo' src={photo} alt='hello' />
				</div>
				<div className='text--content'>
					<h1 className='title'>Jean-Pierre Torres</h1>
					<h2 className='description'>
						Junior FullStack MEAR <br></br>
						Web Development
					</h2>
				</div>
			</div>
		</div>
	);
};

export default Hero;
