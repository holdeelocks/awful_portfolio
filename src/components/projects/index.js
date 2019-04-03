import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';
import React from 'react';

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

const Wrapper = styled.section`
	background-color: #ffffff;
	background: url('https://www.transparenttextures.com/patterns/bright-squares.png') no-repeat
		center center fixed;
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: cover;

	padding: 0 10% 3%;
	position: relative;
	left: 0;
	top: 0;

	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	margin: 0 auto;

	.bg {
		position: fixed;
		z-index: -1;
		width: 100%;
		height: auto;
		top: 0;
		left: 0;
	}

	@media (max-width: 1300px) {
		justify-content: center;
	}
`;

const ProjectWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 1% auto;
	font-family: 'Open Sans', sans-serif;
	a {
		text-decoration: none;
		color: black;
		padding-left: 5px;
		font-size: 16px;
	}
	p {
		font-size: 1.2rem;
	}
	h3 {
		margin-bottom: 8px;
		font-size: 1.4rem;
		color: #0e132f;
	}
	.carousel {
		width: 400px;
		margin-right: 20px;
		.slider {
			width: 400px;
		}
	}
	.icon-wrap {
		display: flex;
		justify-content: center;
		svg {
			width: 15px;
			height: 15px;
			margin: 5px;
		}
	}

	@media (max-width: 650px) {
		flex-direction: column;
		.carousel {
			width: 100%;
			margin-right: 0;

			.slider {
				width: 100%;
			}
		}
		.text {
			display: flex;
			flex-direction: column;
			align-items: center;
		}
		.icon-wrap {
			justify-content: center;
		}
	}
`;

const ProjectsHeading = styled.h2`
	color: #0e132f;
	font-size: 3rem;
	margin: 0 auto;
	padding: 5% 0;
	margin: 0 auto 2%;
	text-shadow: 5px 5px lightgrey;
	text-align: center;
	width: 100%;
`;

const projectList = [
	{
		title: 'Up4',
		link: 'https://up4.life/',
		frontend: 'https://github.com/up4life/frontend',
		backend: 'https://github.com/up4life/backend',
		icons: [
			<GraphqlIcon />,
			<CSSIcon />,
			<NodeIcon />,
			<SassIcon />,
			<ReactIcon />,
			<HerokuIcon />
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
		icons: [<CSSIcon />, <ReactIcon />, <JsIcon />],
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
		icons: [<NodeIcon />, <JsIcon />, <PostgresIcon />, <HerokuIcon />],
		images: [{ original: guidr1 }, { original: guidr2 }, { original: guidr3 }, { original: guidr4 }]
	}
];

const Projects = () => (
	<Wrapper id="projects">
		<ProjectsHeading>Projects</ProjectsHeading>
		{projectList.map(project => {
			return (
				<ProjectWrapper>
					<Carousel
						infiniteLoop
						showIndicators={false}
						showThumbs={false}
						showStatus={false}
						className="carousel"
					>
						{project.images.map(image => (
							<div>
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
				</ProjectWrapper>
			);
		})}
	</Wrapper>
);

export default Projects;
