import React from 'react';

import htmlI from './Assets/html5.png';
import cssI from './Assets/css.png';
import jsI from './Assets/JSicon.png';

import mongoI from './Assets/mongodbIcon.png';
import exI from './Assets/ExIcon.png';
import reactI from './Assets/ReactIcon.png';
import nodeI from './Assets/NodeIcon.png';
import tsI from './Assets/TSIcon.png';

import gitI from './Assets/GITicon.png';
import githubI from './Assets/githubicon.png';
import SassI from './Assets/SassIcon.png';
import npmI from './Assets/npmicon.png';
import bootI from './Assets/BootstrapIcon.png';

import scrumI from './Assets/ScrumIcon.png';
import teamLI from './Assets/TeamLeadIcon.png';
import managerI from './Assets/ManagerIcon.png';

const Skills = () => {
	return (
		<div id='skills' className='row text-center skills scrollY'>
			<h2 className='titleSk'>My Skills</h2>

			<div className='card-body mx-auto col-md-4'>
				<h4>BASICS</h4>
				<div className='mx-auto skillsC'>
					<img src={htmlI} alt='HTML' className='mx-2 imgI' />
					<img src={cssI} alt='CSS' className=' mx-2 imgI' />
					<img src={jsI} alt='CSS' className='mx-2 imgI' />
				</div>
			</div>
			<div className='card-body mx-auto col-md-8'>
				<h4>ADVANCED</h4>
				<div className='mx-auto'>
					<img src={mongoI} alt='HTML' className='mx-2 imgI' />
					<img src={exI} alt='CSS' className='mx-2 imgI' />
					<img src={reactI} alt='CSS' className='mx-2 imgI' />
					<img src={nodeI} alt='CSS' className='mx-2 imgI' />
					<img src={tsI} alt='CSS' className='mx-2 imgI' />
				</div>
			</div>
			<div className='card-body mx-auto col-md-8'>
				<h4>TOOLS</h4>
				<div className='mx-auto'>
					<img src={gitI} alt='HTML' className='mx-2 imgI' />
					<img src={githubI} alt='CSS' className=' mx-2 imgI' />
					<img src={SassI} alt='CSS' className='mx-2 imgI' />
					<img src={bootI} alt='CSS' className='mx-2 imgI' />
					<img src={npmI} alt='CSS' className='mx-2 imgI' />
				</div>
			</div>
			<div className='card-body mx-auto col-md-4'>
				<h4>OTHERS</h4>
				<div className='mx-auto'>
					<img src={scrumI} alt='HTML' className='mx-2 imgI' />
					<img src={teamLI} alt='CSS' className='mx-2 imgI' />
					<img src={managerI} alt='CSS' className='mx-2 imgI' />
				</div>
			</div>
		</div>
	);
};

export default Skills;
