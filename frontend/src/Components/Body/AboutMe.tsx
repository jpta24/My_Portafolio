import React from 'react';

import VEflag from './Assets/VE.png';
import GEflag from './Assets/GE.png';
import BE11 from './Assets/BE11.jpg';
import CE01 from './Assets/CE-01.png';
import CI01 from './Assets/coding_icon_color.png';

const AboutMe = () => {
	return (
		<div className='aboutme scrollY container-fluid'>
			<div className='row'>
				<div className='py-3 text-center justify-items-center '>
					<h6 className='col-md-6 mx-auto'>
						I'm 41 years old from Venezuela{' '}
						<img className='flag' src={VEflag} alt='flag' />
						, living in Germany <img className='flag' src={GEflag} alt='flag' />
						, and have always liked to program so I started coding about two
						years ago and I can't deny it... I love it. <br></br>
						<br></br> I really enjoy making projects come true, but I still
						learning. Since my background I do like to work in teams and
						sometimes I have been leading different kind of groups.
					</h6>
				</div>
			</div>
			<div className='row'>
				<div className='col-md-4'>
					<div className='text-center text-control card card-body text--content cardAbout'>
						<h3>Marine Officer</h3>
						<img className='imgAbout mx-auto mb-3' src={BE11} alt='' />
						<div>
							<p>
								For more than 20 years, I have been working as Marine Officer,
								on differnt roles as Commander, Project Manager and other.
								Working as team and leading people is always a challenge but it
								worth it.
							</p>
						</div>
					</div>
				</div>

				<div className='col-md-4'>
					<div className='text-center text-control card card-body text--content cardAbout'>
						<h3>Civil Engineering</h3>
						<img className='imgAbout mx-auto mb-3' src={CE01} alt='' />
						<div>
							<p>
								Since 2013 I got my degree as Civil Enginner and worked at
								Marine Force on the Enginnering Corps, building infrastructure
								for the Navy, leading over 50 men, then worked as Project
								Manager for an Enginnering Brigade.
							</p>
						</div>
					</div>
				</div>
				<div className='col-md-4'>
					<div className='text-center text-control card card-body text--content cardAbout'>
						<h3>Coding</h3>
						<img className='imgAbout mx-auto mb-3' src={CI01} alt='' />
						<div>
							<p>
								Over the last 2 years I have been learning about Web
								Development, most of the time self-taught, watching videos and
								courses on W3school, Coursera, Youtube and some others.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
