import React from 'react';
import styled from 'styled-components';
import {
	GraphqlIcon,
	CSSIcon,
	GatsbyIcon,
	ReactIcon,
	JsIcon,
	NodeIcon,
	PostgresIcon,
	HerokuIcon,
	SassIcon
} from './icons';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import qb from '../../images/quizbaker.png';
import qb1 from '../../images/quizbaker1.png';
import qb2 from '../../images/quizbaker2.png';
import qb3 from '../../images/quizbaker3.png';
import qb4 from '../../images/quizbaker4.png';
import qb5 from '../../images/quizbaker5.png';
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
// import up47 from '../../images/up47.png';

const Wrapper = styled.div`
	background-color: #ffffff;
	background: url('https://www.transparenttextures.com/patterns/bright-squares.png') no-repeat
		center center fixed;
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: cover;

	position: relative;
	top: 100vh;
	padding: 5% 10%;

	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	margin: 0 auto;

	.bg {
		width: 100%;
		height: auto;
		z-index: -1;
		padding-top: 3%;

		position: fixed;
		top: 0;
		left: 0;
	}
	@media (max-width: 1300px) {
		justify-content: center;
	}
`;

const ProjectWrapper = styled.div`
	margin: 1% auto;
	display: flex;
	align-items: center;
	flex-direction: column;
	font-family: 'Open Sans', sans-serif;
	a {
		text-decoration: none;
		color: gray;
		padding-left: 5px;
		font-size: 16px;
	}
	p {
		font-size: 16px;
	}
	h3 {
		margin-bottom: 8px;
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
			// { original: up47 }
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
		title: 'guidr',
		link: 'https://guidrfrontend.netlify.com',
		repo: 'https://github.com/lsbw-guidr/backend',
		icons: [
			// <GatsbyIcon />,
			// <CSSIcon />,
			<NodeIcon />,
			<JsIcon />,
			<PostgresIcon />,
			<HerokuIcon />
		],
		images: [
			{ original: qb },
			{ original: qb1 },
			{ original: qb2 },
			{ original: qb3 },
			{ original: qb4 },
			{ original: qb5 }
		]
	}
];

const Projects = () => (
	<Wrapper id="projects">
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
