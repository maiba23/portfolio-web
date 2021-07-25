import React, { useEffect } from 'react';
import './Experience.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Experience = () => {
	useEffect(() => {
		AOS.init({ duration: 1000, once: true });
	}, []);

	return (
		<div id='experience' className='experience'>
			{/* These e.g. classes below are the Bootstrap classes. */}
			<div className='d-flex justify-content-center my-5'>
				<h1>Education & Experience Timeline</h1>
			</div>
			<div className='container experience-wrapper'>
				{/* - */}
				<div className='timeline-block timeline-block-left'>
					<div className='marker' data-aos='fade-down'></div>
					<div className='timeline-content' data-aos='slide-right'>
						{/* <h3>October 2012 - March 2017</h3> */}
						<h3>2012 ~ 2015</h3>
						<h4>University of Zielona Góra | Poland</h4>
						<h5>Computer Science graduate with Bachelor of Science degree. </h5>
						<p>
							Studies conducted with specialization in Networked Computer
							Systems.
						</p>

						<hr />

						<h5>Additional Altkom Akademia IT courses: </h5>
						<p>· 70-483: Programming in C#</p>
						<p>
							· 70-511: Windows Applications Development with Microsoft .NET
							Framework 4.
						</p>

						<hr />

						<h5>Additional Softronic IT courses: </h5>
						<p>· MS-20410 Installing and Configuring Windows Server 2012</p>
						<p>· MS-20411 Administering Windows Server 2012</p>
						<p>· MS-20412 Configuring Advanced Windows Server 2012 Services</p>
						<p>· MS-10774 Querying Microsoft SQL Server 2012</p>
						<p>· MS-10775 Administering Microsoft SQL Server 2012 Databases</p>
						<p>
							· MS-10777 Implementing a Data Warehouse with Microsoft SQL Server
							201
						</p>
					</div>
				</div>
				{/* - */}
				<div className='timeline-block timeline-block-right'>
					<div className='marker' data-aos='zoom-in'></div>
					<div className='timeline-content' data-aos='slide-left'>
						<h3>2015 ~ 2016</h3>
						<h4>Gap year - Journey around the World</h4>
						<h5>Venture included:</h5>
						<p>· Establishing collaboration with multiple sponsors.</p>
						<p>
							· Collaboration with National Television - editing & broadcasting
							episodes from our teams' adventures.
						</p>
						<p>
							· Establishing collaboration with Rafał Sonik as our honour
							patron.
						</p>
					</div>
				</div>
				{/* - */}
				<div className='timeline-block timeline-block-left'>
					<div className='marker' data-aos='zoom-in'></div>
					<div className='timeline-content' data-aos='slide-right'>
						<h3>2016 ~ 2017</h3>
						{/* <h4>March 2017</h4> */}
						<h4>Computer Science studies graduated.</h4>
						<h5>BSc thesis' final project - KrewSystem Application</h5>
						<p>
							KrewSystem is a further development of Blood Donation Center
							System via implementation of web portal for servicing blood
							donors. Application is an extension of already existing BDC's
							system and is dedicated for local departments of Lubuskie region
							located in 5 other cities.
						</p>
						<p>
							The application's functionality is based on the ASP.NET MVC 5
							framework (written in C# language) along with the use of
							EntityFramework for database connection. Other technologies,
							frameworks and libraries used: HTML5, CSS3, JavaScript, Bootstrap,
							Transact-SQL, etc.
						</p>
					</div>
				</div>

				{/* - */}
				<div className='timeline-block timeline-block-right'>
					<div className='marker' data-aos='zoom-in'></div>
					<div className='timeline-content' data-aos='slide-left'>
						<h3>2017</h3>
						<h4>April 2017 ~ September 2017</h4>
						<h5>Intern Software Developer | catsSoft IT Systems</h5>
						<p>
							• Developing & implementing applications' functionalities based on
							the ASP.NET MVC 5 framework along with technologies such as HTML
							5, CSS 3, Bootstrap and EntityFramework.
						</p>
						<hr />
						<h4>May 2017</h4>
						<p>
							IELTS (International English Language Testing System) - C1 level.
						</p>
					</div>
				</div>
				{/* - */}

				{/* - */}
				<div className='timeline-block timeline-block-left'>
					<div className='marker' data-aos='zoom-in'></div>
					<div className='timeline-content' data-aos='slide-right'>
						<h3>2017 ~ 2019</h3>
						{/* <h4>October 2017</h4> */}
						<h4>Over 2 years stay in Australia.</h4>
						<h5>Various jobs in non-IT related industries, including:</h5>
						<p>
							· Food and Beverage Attendant in 5-Star Ayers Rock Resort (Yulara,
							Northern Territory, Australia)
						</p>
						<p>· Commercial Painter (Sydney, New South Wales, Australia)</p>
						<p>· Banana Plantation Worker (Atherton, Queensland, Australia)</p>
					</div>
				</div>

				{/* - */}
				<div className='timeline-block timeline-block-right'>
					<div className='marker' data-aos='zoom-in'></div>
					<div className='timeline-content' data-aos='slide-left'>
						<h3>2019 ~ 2020</h3>
						{/* <h4>October 2017</h4> */}
						<h4>October 2019 ~ June 2020</h4>
						<h5>9-months stay in the United Kingdom for work purposes.</h5>
						<p>
							· Data Analyst / Machine Operator at The Amtico Co Ltd (Coventry,
							West Midlands, England)
						</p>
					</div>
				</div>

				{/* - */}
				<div className='timeline-block timeline-block-left'>
					<div className='marker' data-aos='zoom-in'></div>
					<div className='timeline-content' data-aos='slide-right'>
						<h3>2020 ~ 2021</h3>
						<h4>February 2020</h4>
						<p>
							TOEIC (Test of English of International Communication) - C2 level
							(905 out of 990 points).
						</p>

						<hr />

						<h4>July 2020 ~ Currently</h4>
						<h4>Junior Software Developer</h4>
						<h5>catsSoft IT Systems</h5>
						<p>
							• Developing & implementing graphical user interfaces using the
							ReactJS library.
						</p>
						<p>
							• Developing applications' functionalities based on ASP.NET MVC 5
							framework, along with technologies such as HTML5, CSS 3, Bootstrap
							and EntityFramework.
						</p>

						<hr />

						<h4>October 2020 ~ Currently</h4>
						<h4>Koźminski University | Warsaw | Poland</h4>
						<h5>Part-time Master of Science studies during weekends.</h5>
						<p>
							Faculty of Master in Management with specialization in Project
							Management.
						</p>
						<p>Studies conducted entirely in English language.</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Experience;
