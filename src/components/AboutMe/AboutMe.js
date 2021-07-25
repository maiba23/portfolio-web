// import classes from "*.module.sass";
import React, { useEffect } from 'react';
import authorImg from '../../avatar-transparent.png';
// import DownloadPDF from "../ReactPDF/ReactPDF";
import './AboutMe.css';
import cvENG from './CV-Lukasz-Kot-ENG.pdf';
import cvPOL from './CV-Lukasz-Kot-POL.pdf';
import DiplomaENG from './Diploma-LK-ENG.pdf';
import DiplomaPOL from './Diploma-LK-POL.pdf';
import DiplomaSupplement from './Diploma-Supplement-LK.pdf';
import IELTS from './IELTS-LK.pdf';
import TOEIC from './TOEIC-LK.pdf';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutMe = () => {
	useEffect(() => {
		AOS.init({
			startEvent: 'DOMContentLoaded',
			offset: 200,
			once: true,
		});
	}, []);

	return (
		//    These e.g. "container py-5" classes are the Bootstrap classes.
		<div id='about' className='about'>
			<div className='container py-5'>
				{/* <h1 className="about-heading">about me</h1> */}
				<h1 className='py-5'>About Me</h1>
				<div className='row'>
					<div
						className='col-lg-6 col-xm-12'
						data-aos='fade-right'
						data-aos-delay='250'
					>
						<p>
							<hr />
							<h4>Brief Introduction</h4>
							<hr />
							<span className='bold-text'>Hey there, good day!</span>
							<br />
							<br />
							My name is Łukasz Kot and currently I am
							<span className='bold-text'>
								{' '}
								looking for a vacancy as a Junior Frontend Developer.{' '}
							</span>
							I’ve{' '}
							<span className='bold-text'>
								graduated Informatics on the University of Zielona Góra with
								Bachelor’s degree.{' '}
							</span>
							In 2020 I’ve decided to broaden my academic portfolio by
							undertaking part-time Master in Management studies an the
							Koźmiński University in Warsaw. Studies are conducted fully in
							English language with specialization in Project Management. At the
							moment I am working remotely implementing projects for the
							catsSoft IT Systems company. My private, as well as professional
							life, I split between Zielona Góra, Wrocław and Warsaw.
							<br />
							<br />
							{/* W tym okresie stworzyłem niezwykle przydatną aplikację
              KrewSystem pozwalającą na zdigitalizowaną rejestrację krwiodawców
              oddziałach terenowych Regionalnego Centrum Krwiodawstwa i
              Krwiolecznictwa na terenie województwa Lubuskiego. Przyczyniło się
              to do szybszej i sprawniejszej obsługi krwiodawców oraz wszelkich
              operacji z tym związanych, co niewątpliwie ma ogromne znaczenie w
              przypadku ratowania ludzkiego życia.  */}
							My first programming steps after graduation were related with C#
							language. I have been developing applications based on the ASP.NET
							MVC framework.
							<br />
							<br />
							However,{' '}
							<span className='bold-text'>
								{' '}
								since the second part of year 2020 I’ve focused strictly on
								bettering my skills in web development
							</span>
							. Simply due to the fact that this branch of IT sector brings me
							the most fun.
							<br />
							<br />
							<span className='bold-text'>
								The simplicity, along with multiple new possibilities and
								functionalities which brings the ReactJS library, caused the
								fact that I bond my future as a programmer especially with this
								technology.
							</span>
							<br />
							<br />I love neat, minimalistic design with the emphasis on the
							details, which give the applications a slick style. Fine
							animations, well-matched colors of the graphic design with dynamic
							functionalities – definitely such approach ensures the product a
							competitive advantage on the market.
						</p>
					</div>
					<div
						className='col-lg-6 col-xm-12'
						data-aos='fade-left'
						data-aos-delay='250'
					>
						<p>
							<hr />
							<h4>Personality & Skills</h4>
							<hr />
							<span className='bold-text'>
								{' '}
								A little bit more about myself.
							</span>
							<br />
							<br />I am amibitious and communicative.{' '}
							<span className='bold-text'>
								{' '}
								Paying attention to details, always eager to improve my skills.
								A team work in professional, yet funny atmosphere, is something
								I value the most!
							</span>{' '}
							I also happily undertake individual challenges. Demanding tasks
							certainly are no stranger to me. I reckon that all of the ventures
							I have undertaken so far speak for themselves. They show, that
							what I have written, are not just some empty words.
							<br />
							<br />
							Additionally I've{' '}
							<span className='bold-text'>
								{' '}
								organized and paricipated in 8-months long journey around the
								World
							</span>
							.
							<br />
							<br />
							<span className='bold-text'>
								{' '}
								This endevour most definitely taught me a true team work, both
								in those good and worse moments
							</span>{' '}
							(link in the ‘Ventures’ section). Spending entire time, throught
							so many months, in same car or same tent, with the same group of
							people and not killing each other, on the contrary – a great team
							work, it speaks for itself 😉
							<br />
							<br />
							<span className='bold-text'> Reaching out to sponsors</span> and
							cooperation with many well-known brands across Poland,{' '}
							<span className='bold-text'>collaboration with media</span> at
							very young age,{' '}
							<span className='bold-text'>
								{' '}
								all that taught me business approach to the meetings and
								conversations with highest-ranked representatives of various
								industries.
							</span>
							<br />
							<br />
							Based on real-life situations, I learned professional approach to
							the tasks entrusted to me in order to meet all the requirements.
							To be on time with each deadline given.
						</p>
					</div>
				</div>

				<div className='row'>
					<div
						className='col-lg-6 col-xm-12'
						data-aos='fade-right'
						data-aos-delay='400'
					>
						<hr />
						<h4>English documents preview</h4>
						<a className='pdf-link' href={cvENG} target='_blank'>
							Curriculum Vitae
						</a>
						{'   ·   '}
						<a className='pdf-link' href={IELTS} target='_blank'>
							IELTS
						</a>
						{'   ·   '}
						<a className='pdf-link' href={TOEIC} target='_blank'>
							TOEIC
						</a>
						{'   ·   '}
						<a className='pdf-link' href={DiplomaENG} target='_blank'>
							Diploma
						</a>
						{'   ·   '}
						<a className='pdf-link' href={DiplomaSupplement} target='_blank'>
							Diploma Supplement
						</a>
					</div>

					<div
						className='col-lg-6 col-xm-12'
						data-aos='fade-left'
						data-aos-delay='400'
					>
						<hr />
						<h4>Polish documents preview</h4>
						<a className='pdf-link' href={cvPOL} target='_blank'>
							Curriculum Vitae
						</a>
						{'   ·   '}
						<a className='pdf-link' href={DiplomaPOL} target='_blank'>
							Diploma
						</a>
						{/* {"   ·   "}
            <a className="pdf-link" href={CurriculumViate} target="_blank">
              Diploma Supplement
            </a> */}
					</div>
				</div>

				<div className='row'>
					<div
						className='col-lg-12 col-xm-12'
						data-aos='fade-up'
						data-aos-delay='200'
					>
						<p>
							<hr />
							<h4>Experience Summary</h4>
							<hr />
							So far,{' '}
							<span className='bold-text'>
								{' '}
								I have already acquired experience working with both back-end
								and front-end.
							</span>{' '}
							Right after graduating from engineering studies, I worked my work
							at the catsSoft IT Systems company as a Junior Software Developer.
							Mainly developing the previously implemented KrewSystem
							application.
							<br />
							<br />
							In addition, during my{' '}
							<span className='bold-text'> two-year stay in Australia</span>,
							I’ve worked, among others, as a food and beverage attendant. I’ve
							done my job in the world-famous outdoor Sounds of Silence
							restaurant in Yulara, which is an integral part of the iconic
							Ayers Rock Resort.
							<br />
							<br />
							<span className='bold-text'>
								{' '}
								The tasks entrusted to me required excellent knowledge of the
								English language, as well as top-notch propriety, while working
								with demanding clients who expected the highest standard of
								service.{' '}
							</span>
							Thanks to this experience,{' '}
							<span className='bold-text'>
								{' '}
								I have no problems with communication or understanding
								complicated technical documentation.
							</span>{' '}
							Additionally, at the moment, I am{' '}
							<span className='bold-text'>
								{' '}
								improving my skills in Spanish language.
							</span>{' '}
							As of now, on the basis of exam, my skills were assessed at the
							A2/B1 level. In the future I’d like to speak in this language as
							fluently as in English.
							<br />
							<br />
							Summing up my experiences, I had an opportunity to live and work
							at the end of the globe, in Australia. What is important to me is
							that such{' '}
							<span className='bold-text'>
								{' '}
								2-year stay in English-speaking country not only allowed me to
								improve my English language skills to the level of a native
								speaker, but also helped me gain priceless life experiences.
							</span>
							<br />
							<br />
							After coming back from Australia,{' '}
							<span className='bold-text'>
								{' '}
								I resumed my career as a Junior Software Developer with an
								emphasis on web development.
							</span>{' '}
							In addtition to many front-end aimed courses,{' '}
							<span className='bold-text'>
								{' '}
								I have already implemented some of my own projects
							</span>{' '}
							– such as this portfolio website or the official webpage of the
							catsSoft IT Systems. In my spare time, I not only consolidate the
							knowledge I’ve acquired so far, but also learn new solutions and
							technologies.
							<br />
							<br />
							<h5>
								If anyone has reached to this very end of my description, I
								sincerely CONGRATULATE / THANK YOU! 😉
							</h5>
							<br />
							<h5>
								Feel free to contact me, whether it’s about work or a casual
								conversation. I will be more than happy to answer any message I
								get.
							</h5>
							<br />
							<h5>Hope to hear from you and have a nice day!</h5>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
