import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import VEflag from './Assets/VE.png';
import GEflag from './Assets/GE.png';

import CE_1 from './Assets/CE_1.jpg';
import CE_7 from './Assets/CE_7.png';
import CE_a from './Assets/CE_a.png';
import CE_b from './Assets/CE_b.png';

import MO_7 from './Assets/MO_7.png';
import MO_a from './Assets/MO_a.jpg';
import MO_b from './Assets/MO_b.png';
import MO_c from './Assets/MO_c.png';

import CI01 from './Assets/CI02.png';

const AboutMe = () => {
	return (
		<div id='aboutme' className='aboutme scrollY row'>
			<div className='row'>
				<div className='pt-3 text-center justify-items-center '>
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
			<div className='row p-2'>
				<div className='col-md-4'>
					<div className='text-center text--content cardAbout'>
						<h3>MARINE OFFICER</h3>
						<Carousel fade className='carouselFix mx-auto'>
							<Carousel.Item className='justify-items-center'>
								<img className='carouselFix' src={MO_7} alt='First slide' />
							</Carousel.Item>
							<Carousel.Item>
								<img className='carouselFix' src={MO_a} alt='Second slide' />
							</Carousel.Item>
							<Carousel.Item>
								<img className='carouselFix' src={MO_b} alt='Third slide' />
							</Carousel.Item>
							<Carousel.Item>
								<img className='carouselFix' src={MO_c} alt='Third slide' />
							</Carousel.Item>
						</Carousel>
						<div>
							<p>
								For more than 20 years, I have been working as Marine Officer,
								on differnt roles as Commander, Project Manager and others.
								Working as team member and leading people is always a challenge
								but it worth it.
							</p>
						</div>
					</div>
				</div>

				<div className='col-md-4'>
					<div className='text-center text--content cardAbout'>
						<h3>CIVIL ENGINEERING</h3>
						<Carousel fade className='carouselFix mx-auto'>
							<Carousel.Item className='justify-items-center'>
								<img
									className='d-block carouselFix'
									src={CE_1}
									alt='First slide'
								/>
							</Carousel.Item>

							<Carousel.Item>
								<img
									className='d-block carouselFix'
									src={CE_7}
									alt='Third slide'
								/>
							</Carousel.Item>
							<Carousel.Item>
								<img
									className='d-block carouselFix'
									src={CE_a}
									alt='Third slide'
								/>
							</Carousel.Item>
							<Carousel.Item>
								<img
									className='d-block carouselFix'
									src={CE_b}
									alt='Third slide'
								/>
							</Carousel.Item>
						</Carousel>
						<div>
							<p>
								Since 2013 I got my degree as Civil Enginner and worked at
								Marine Force on the Enginnering Corps, building infrastructure
								for the Navy, leading over 50 men, then worked as Project
								Manager for an Enginnering Military Brigade.
							</p>
						</div>
					</div>
				</div>
				<div className='col-md-4'>
					<div className='text-center text--content cardAbout'>
						<h3>CODING</h3>
						<Carousel fade className='carouselFix mx-auto'>
							<Carousel.Item className='justify-items-center'>
								<img className='carouselFix' src={CI01} alt='First slide' />
							</Carousel.Item>
						</Carousel>
						<div>
							<p>
								Over the last 2 years I have been learning about Web
								Development, most of the time self-taught, watching videos and
								courses on W3school, Coursera, YouTube and some others.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
