import React from 'react';

import logo from './Assets/coding_icon_color.png';
import photo from './Assets/photo.png';

const Hero = () => {
	return (
		<div id='hero' className='row hero'>
			<div className='col-md-4 mx-auto'>
				<div className='text-center'>
					<img className='logo mx-auto' src={logo} alt='hello' />
				</div>
				<div className='text-center'>
					<img className='photo mx-auto' src={photo} alt='hello' />
				</div>
				<div className='text-center text--content '>
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
