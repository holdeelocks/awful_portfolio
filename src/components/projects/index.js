import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Particles from 'react-particles-js';
import React from 'react';

import { SubCatWrapper, ProjectWrap, SubCatHeader } from '../../styles';
import {
	GraphqlIcon,
	CSSIcon,
	ReactIcon,
	JsIcon,
	NodeIcon,
	PostgresIcon,
	HerokuIcon,
	SassIcon
} from './icons';

import guidr1 from '../../images/guidr1.png';
import guidr2 from '../../images/guidr2.png';
import guidr3 from '../../images/guidr3.png';
import guidr4 from '../../images/guidr4.png';

import testnet from '../../images/testnet.png';
import testnet1 from '../../images/testnet1.png';
import testnet2 from '../../images/testnet2.png';
import testnet3 from '../../images/testnet3.png';
import testnet4 from '../../images/testnet4.png';

import up4 from '../../images/up4.png';
import up41 from '../../images/up41.png';
import up42 from '../../images/up42.png';
import up43 from '../../images/up43.png';
import up44 from '../../images/up44.png';
import up45 from '../../images/up45.png';
import up46 from '../../images/up46.png';

const projectList = [
	{
		title: 'Up4',
		link: 'https://up4.life/',
		frontend: 'https://github.com/up4life/frontend',
		backend: 'https://github.com/up4life/backend',
		icons: [
			<GraphqlIcon key={1} />,
			<CSSIcon key={2} />,
			<NodeIcon key={3} />,
			<SassIcon key={4} />,
			<ReactIcon key={5} />,
			<HerokuIcon key={6} />
		],
		images: [
			{ original: up4 },
			{ original: up41 },
			{ original: up42 },
			{ original: up43 },
			{ original: up44 },
			{ original: up45 },
			{ original: up46 }
		]
	},
	{
		title: 'TestNet: Quiz App',
		link: 'https://holdeelocks.github.io/TestNet/',
		repo: 'https://github.com/cooltable/eastside-swim-school',
		icons: [<CSSIcon key={1} />, <ReactIcon key={2} />, <JsIcon key={3} />],
		images: [
			{ original: testnet },
			{ original: testnet1 },
			{ original: testnet2 },
			{ original: testnet3 },
			{ original: testnet4 }
		]
	},
	{
		title: 'guidr API',
		link: 'https://guidrapi.herokuapp.com',
		repo: 'https://github.com/lsbw-guidr/backend',
		icons: [
			<NodeIcon key={1} />,
			<JsIcon key={2} />,
			<PostgresIcon key={3} />,
			<HerokuIcon key={4} />
		],
		images: [{ original: guidr1 }, { original: guidr2 }, { original: guidr3 }, { original: guidr4 }]
	}
];

const url2 = 'https://www.transparenttextures.com/patterns/ecailles.png';

const Projects = () => (
	<SubCatWrapper id="projects" url={url2}>
		{/* <SubCatHeader>Projects</SubCatHeader> */}
		<div className="container">
			{projectList.map(project => {
				return (
					<ProjectWrap key={project.title}>
						<Carousel
							infiniteLoop
							showIndicators={false}
							showThumbs={false}
							showStatus={false}
							className="carousel"
						>
							{project.images.map((image, i) => (
								<div key={i}>
									<img src={image.original} />
								</div>
							))}
						</Carousel>
						<div className="text" style={{ textAlign: 'center' }}>
							<h3>{project.title}</h3>
							<div className="icon-wrap">{project.icons.map(icon => icon)}</div>
							<div>
								{project.title === 'Up4' ? (
									<>
										<a href={project.link}>Live Site</a> &bull;
										<a href={project.frontend}>Frontend</a> /<a href={project.backend}>Backend </a>
									</>
								) : (
									<>
										<a href={project.link}>Live Site</a> &bull;
										<a href={project.repo}>Project Repository</a>
									</>
								)}
							</div>
						</div>
						<hr />
					</ProjectWrap>
				);
			})}
		</div>
		<Particles
			width={'100vw'}
			height={'100vh'}
			style={{ position: 'absolute', top: 0, left: 0 }}
			params={{
				particles: {
					number: {
						value: 35
					},
					size: {
						value: 4
					},
					color: {
						value: ['#BD10E0', '#B8E986', '#50E3C2']
					},
					opacity: {
						value: 0.5211089197812949,
						random: false,
						anim: {
							enable: true,
							speed: 0.1,
							opacity_min: 0.1,
							sync: false
						}
					},
					size: {
						value: 8.017060304327615,
						random: true,
						anim: {
							enable: true,
							speed: 7.5,
							size_min: 0.1,
							sync: true
						}
					},
					line_linked: {
						enable: true,
						distance: 140,
						color: '#c8c8c8',
						opacity: 0.9,
						width: 2
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
	</SubCatWrapper>
);

export default Projects;
