import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import VEflag from './Assets/Img/Some/VE.png';
import GEflag from './Assets/Img/Some/GE.png';

import MO1 from './Assets/Img/MO/MO1.png';
import MO2 from './Assets/Img/MO/MO2.png';
import MO3 from './Assets/Img/MO/MO3.png';
import MO4 from './Assets/Img/MO/MO4.png';
import MOa from './Assets/Img/MO/MOa.png';
import MOb from './Assets/Img/MO/MOb.png';

import CE2 from './Assets/Img/CE/CE2.png';
import CE4 from './Assets/Img/CE/CE4.png';
import CE5 from './Assets/Img/CE/CE5.png';
import CEa from './Assets/Img/CE/CEa.png';
import CEb from './Assets/Img/CE/CEb.png';
import CEc from './Assets/Img/CE/CEc.png';
import CEf from './Assets/Img/CE/CEf.png';

import CI01 from './Assets/Img/Some/CI02.png';
import CO02 from './Assets/Img/Some/CO1.gif';
import CO03 from './Assets/Img/Some/CO2.gif';

const AboutMe = () => {
	return (
		<div id='aboutme' className='row aboutme scrollY'>
			<div className='row'>
				<div className='pt-3 text-center justify-items-center animate__animated animate__fadeInUp'>
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
			<div className='row p-2 justify-content-around mx-auto d-flex align-items-stretch animate__animated animate__fadeInUp'>
				<div className='col-md-4 px-5'>
					<div className='text-center text--content cardAbout'>
						<h3>MARINE OFFICER</h3>
						<Carousel fade className='carouselFix mx-auto'>
							<Carousel.Item className='justify-items-center'>
								<img className='carouselFix' src={MOb} alt='First slide' />
							</Carousel.Item>
							<Carousel.Item>
								<img className='carouselFix' src={MO1} alt='Second slide' />
							</Carousel.Item>
							<Carousel.Item>
								<img className='carouselFix' src={MO3} alt='Third slide' />
							</Carousel.Item>
							<Carousel.Item>
								<img className='carouselFix' src={MO2} alt='Third slide' />
							</Carousel.Item>
							<Carousel.Item>
								<img className='carouselFix' src={MO4} alt='Third slide' />
							</Carousel.Item>
							<Carousel.Item>
								<img className='carouselFix' src={MOa} alt='Third slide' />
							</Carousel.Item>
						</Carousel>
						<div>
							<p className='px-3 pAb'>
								For more than 20 years, I have been working as Marine Officer,
								on differnt roles as Commander, Project Manager and others.
								Working as team member and leading people is always a challenge
								but it worth it.
							</p>
						</div>
					</div>
				</div>

				<div className='col-md-4 px-5'>
					<div className='text-center text--content cardAbout'>
						<h3>CIVIL ENGINEERING</h3>
						<Carousel fade className='carouselFix mx-auto'>
							<Carousel.Item className='justify-items-center'>
								<img
									className='d-block carouselFix'
									src={CEc}
									alt='First slide'
								/>
							</Carousel.Item>

							<Carousel.Item>
								<img
									className='d-block carouselFix'
									src={CE2}
									alt='Third slide'
								/>
							</Carousel.Item>
							<Carousel.Item>
								<img
									className='d-block carouselFix'
									src={CE5}
									alt='Third slide'
								/>
							</Carousel.Item>
							<Carousel.Item>
								<img
									className='d-block carouselFix'
									src={CE4}
									alt='Third slide'
								/>
							</Carousel.Item>
							<Carousel.Item>
								<img
									className='d-block carouselFix'
									src={CEf}
									alt='Third slide'
								/>
							</Carousel.Item>
							<Carousel.Item>
								<img
									className='d-block carouselFix'
									src={CEa}
									alt='Third slide'
								/>
							</Carousel.Item>
							<Carousel.Item>
								<img
									className='d-block carouselFix'
									src={CEb}
									alt='Third slide'
								/>
							</Carousel.Item>
						</Carousel>
						<div>
							<p className='px-3 pAb'>
								Since 2013 I got my degree as Civil Enginner and worked at
								Marine Force on the Enginnering Corps, building infrastructure
								for the Navy, leading over 50 men, then worked as Project
								Manager for an Enginnering Military Brigade.
							</p>
						</div>
					</div>
				</div>
				<div className='col-md-4 px-5'>
					<div className='text-center text--content cardAbout'>
						<h3>CODING</h3>
						<Carousel fade className='carouselFix mx-auto'>
							<Carousel.Item className='justify-items-center'>
								<img className='carouselFix' src={CI01} alt='First slide' />
							</Carousel.Item>
							<Carousel.Item className='justify-items-center'>
								<img className='carouselFix' src={CO02} alt='First slide' />
							</Carousel.Item>
							<Carousel.Item className='justify-items-center'>
								<img className='carouselFix' src={CO03} alt='First slide' />
							</Carousel.Item>
						</Carousel>
						<div>
							<p className='px-3 pAb'>
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
