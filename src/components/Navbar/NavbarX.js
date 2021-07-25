import React from 'react';
import './NavbarX.css';
import logo from './logo-luk-kot-SD-2.png';
// REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';

function NavbarX() {
	const navSlide = () => {
		const burger = document.querySelector('.burger');
		const nav = document.querySelector('.nav-links');
		const navLinks = document.querySelectorAll('.nav-links li');

		//Toggle Nav
		nav.classList.toggle('nav-active');

		//Animate Links
		navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = '';
			} else {
				link.style.animation = `navLinkFade 0.5s ease forwards ${
					index / 7 + 0.3
				}s`;
			}
		});
		//Burger Animation
		burger.classList.toggle('toggle');
	};

	return (
		<>
			<nav>
				<Link smooth={true} to='home' offset={-80}>
					<img className='logo' src={logo} alt='logo...' />
				</Link>
				<ul className='nav-links'>
					<li>
						{/* <a href="#">Home</a> */}
						<Link
							smooth={true}
							to='about'
							offset={-80}
							className='nav-link'
							href='#'
							onClick={navSlide}
						>
							about me
						</Link>
					</li>
					<li>
						{/* <a href="#">About</a> */}
						<Link
							smooth={true}
							to='portfolio'
							offset={-80}
							className='nav-link'
							href='#'
							onClick={navSlide}
						>
							Portfolio
						</Link>
					</li>
					<li>
						{/* <a href="#">Work</a> */}
						<Link
							smooth={true}
							to='technologies'
							offset={-80}
							className='nav-link'
							href='#'
							onClick={navSlide}
						>
							Technologies
						</Link>
					</li>
					<li>
						{/* <a href="#">Projects</a> */}
						<Link
							smooth={true}
							to='experience'
							offset={-80}
							className='nav-link'
							href='#'
							onClick={navSlide}
						>
							Experience
						</Link>
					</li>
					<li>
						{/* <a href="#">Projects</a> */}
						<Link
							smooth={true}
							to='ventures'
							offset={-80}
							className='nav-link'
							href='#'
							onClick={navSlide}
						>
							Ventures
						</Link>
					</li>
					<li>
						{/* <a href="#">Projects</a> */}
						<Link
							smooth={true}
							to='contacts'
							offset={-80}
							className='nav-link'
							href='#'
							onClick={navSlide}
						>
							Contact
						</Link>
					</li>
				</ul>
				<div className='burger' onClick={navSlide}>
					<div className='line1'></div>
					<div className='line2'></div>
					<div className='line3'></div>
				</div>
			</nav>
		</>
	);
}

export default NavbarX;
