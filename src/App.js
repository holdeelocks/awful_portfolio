import React, { Component, Fragment } from 'react';
import Particles from 'react-particles-js';
import styled from 'styled-components';
import './App.css';

const Name = styled.h1`
	color: white;
	position: absolute;
	bottom: 50%;
	right: 50%;
	font-size: 2.6rem;
	font-weight: 400;
`;

const SubHeading = styled.p`
	color: white;
	position: absolute;
	font-size: 2rem;
	bottom: 42.5%;
	right: 50%;
`;

class App extends Component {
	render() {
		return (
			<div>
				<div
					style={{
						position: 'relative',
						height: '100vh',
						backgroundColor: '#0e132f'
					}}
				>
					<Name>Holden Bucher</Name>
					<SubHeading>Full Stack Web Developer</SubHeading>
					<Particles
						params={{
							particles: {
								number: {
									value: 60,
									density: {
										enable: true,
										value_area: 1500
									}
								},
								line_linked: {
									enable: true,
									opacity: 0.02
								},
								move: {
									direction: 'right',
									speed: 0.05
								},
								size: {
									value: 1
								},
								opacity: {
									anim: {
										enable: true,
										speed: 1,
										opacity_min: 0.05
									}
								}
							},
							interactivity: {
								events: {
									onclick: {
										enable: true,
										mode: 'push'
									}
								},
								modes: {
									push: {
										particles_nb: 1
									}
								}
							},
							retina_detect: true
						}}
					/>
					<div>
						<p style={{ color: 'red' }}>Here is more stuffs</p>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
