import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Particles from 'react-particles-js';
// import styled from 'styled-components';
import React from 'react';

import { Heading, SubHeading, Nav, SubNav, LinkWrap, AppWrap } from './styles';
import Projects from './components/projects';

const App = () => {
	return (
		<>
			<AppWrap>
				<Nav>
					<SubNav>
						<a href="https://github.com/holdeelocks" rel="noopener noreferrer" target="_blank">
							<FontAwesomeIcon icon={faGithub} size="2x" color="white" />
						</a>
						<a
							href="https://www.linkedin.com/in/holden-bucher/"
							rel="noopener noreferrer"
							target="_blank"
						>
							<FontAwesomeIcon icon={faLinkedinIn} size="2x" color="white" />
						</a>
						<a
							href="https://resume.creddle.io/resume/7oc4tjn5l28"
							rel="noopener noreferrer"
							target="_blank"
						>
							<FontAwesomeIcon icon={faFileDownload} size="2x" color="white" />
						</a>
					</SubNav>
				</Nav>
				<Heading>Holden Bucher</Heading>
				<SubHeading>Full Stack Web Developer</SubHeading>
				<LinkWrap>
					<a href="#projects">Projects</a> &bull;
					<a href="#aboutMe">About Me</a> &bull;
					<a href="#contact">Contact</a>
				</LinkWrap>
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
			</AppWrap>

			<Projects />
		</>
	);
};

export default App;
