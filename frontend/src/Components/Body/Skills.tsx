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
import githubI from './Assets/githuhicon.png';
import SassI from './Assets/SassIcon.png';
import npmI from './Assets/npmicon.png';
import bootI from './Assets/BootstrapIcon.png';

import scrumI from './Assets/ScrumIcon.png';
import teamLI from './Assets/teamLeadIcon.png';
import managerI from './Assets/ManagerIcon.png';

const Skills = () => {
	return (
		<div id='skills' className='scrollY skills text-center container-fluid'>
			<h2 className='py-2 mx-auto row'>My Skills</h2>
			<div className='row'>
				<h4 className='py-2'>Basics</h4>
				<div className='row'>
					<img src={htmlI} alt='' className='col skills ' />
					<img src={cssI} alt='' className='col skills ' />
				</div>
			</div>
		</div>
	);
};

export default Skills;
