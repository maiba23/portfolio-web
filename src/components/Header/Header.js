import React, { useEffect } from 'react';
import Typed from 'react-typed';
import ButtonHover from './../Button';
// import "./../ButtonStyles.css";
import './Header.css';
import { Link } from 'react-scroll';
import ContactButton from '../ContactButton';
import authorImg from '../../avatar-transparent.png';
import myselfImg from '../../myself-transparent.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
	useEffect(() => {
		AOS.init({
			startEvent: 'DOMContentLoaded',
			offset: 200,
			duration: 3000,
			once: true,
		});
	});

	return (
		<div id='home' className='header-wrapper'>
			<div className='main-info'>
				{/* <canvas></canvas> */}
				{/* <div className="photo-wrap"> */}
				<img
					className='profile-img img-fluid'
					src={authorImg}
					alt='author...'
					data-aos='fade-down'
					data-aos-delay='100'
				/>
				{/* </div> */}
				<h1 data-aos='fade-down' data-aos-delay='200'>
					Hey, I'm Łukasz the Junior Frontend Developer.
				</h1>
				<h1 data-aos='fade-down' data-aos-delay='300'>
					Let's work together!
				</h1>
				{/* Using React-Typed package to display 'writing text animation'. */}
				<Typed
					className='typed-text'
					strings={[
						'ReactJS',
						'ASP.NET MVC',
						'HTML 5',
						'CSS 3',
						'Bootstrap',
						'GitHub',
						'JavaScript',
						'C#',
						'Visual Studio Code',
						'NPM',
						'Entity Framework',
						'MySQL',
					]}
					typeSpeed={40}
					backSpeed={60}
					loop
				/>
				{/* Later on I'll refactor the code for Router Links. */}
				{/* <a href="/contacts" className="btn-main-offer">
          contact me
        </a> */}
				<Link
					smooth={true}
					to='contacts'
					offset={-80}
					className='btn-main-offer'
					href='#'
				>
					Contact me
				</Link>
				{/* <ButtonHover href="contacts" /> */}
				{/* <ContactButton /> */}
			</div>
		</div>
	);
};

export default Header;
