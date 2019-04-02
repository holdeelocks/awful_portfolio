import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Particles from 'react-particles-js';
import React from 'react';

import { Header, SubHeading, Name, IconWrapper } from './styles';

const App = () => {
	return (
		<div>
			<div
				style={{
					position: 'absolute',
					height: '100vh',
					width: '100%',
					backgroundColor: '#0e132f'
				}}
			>
				<Header>
					<IconWrapper>
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
					</IconWrapper>
				</Header>
				<Name>Holden Bucher</Name>
				<SubHeading>Full Stack Web Developer</SubHeading>
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
			</div>
		</div>
	);
};

export default App;
