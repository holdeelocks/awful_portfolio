import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Particles from 'react-particles-js';
import { Link } from 'react-scroll';
import React from 'react';

import { Page, Heading, SubHeading, Nav, SubNav, LinkList } from './styles';
import Projects from './components/projects';
// import AboutMe from './components/aboutme';

const App = () => {
	return (
		<>
			<Page>
				<Nav>
					<SubNav>
						<a href="https://github.com/holdeelocks" rel="noopener noreferrer" target="_blank">
							<FontAwesomeIcon icon={faGithub} color="white" />
						</a>
						<a
							href="https://www.linkedin.com/in/holden-bucher/"
							rel="noopener noreferrer"
							target="_blank"
						>
							<FontAwesomeIcon icon={faLinkedinIn} color="white" />
						</a>
						<a
							href="https://resume.creddle.io/resume/7oc4tjn5l28"
							rel="noopener noreferrer"
							target="_blank"
						>
							<FontAwesomeIcon icon={faFileDownload} color="white" />
						</a>
					</SubNav>
				</Nav>
				<Heading>Holden Bucher</Heading>
				<SubHeading>Full Stack Web Developer</SubHeading>
				<LinkList>
        {/* &bull; */}
					<li>
						<span />
						<Link to="projects" spy={true} smooth={true} duration={600}>
							Projects
						</Link>
					</li>
					{/* &bull; */}
					{/* <li>
						<span />
						<Link to="aboutMe" spy={true} smooth={true} duration={550}>
							About Me
						</Link>
					</li>
					&bull;
					<li>
						<span />
						<Link to="contact" spy={true} smooth={true} duration={500}>
							Contact
						</Link>
					</li> */}
				</LinkList>
				<Particles
					width={'100vw'}
					height={'100vh'}
					style={{ position: 'absolute', top: 0, left: 0 }}
					params={{
						particles: {
							number: {
								value: 50
							},
							size: {
								value: 3
							}
						},
						interactivity: {
							events: {
								onhover: {
									enable: true,
									mode: 'repulse'
								}
							}
						}
					}}
				/>
			</Page>
			<Projects />
			{/* <AboutMe /> */}
		</>
	);
};

export default App;
