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
import qb from '../images/quizbaker.png';
import qb1 from '../images/quizbaker1.png';
import qb2 from '../images/quizbaker2.png';
import qb3 from '../images/quizbaker3.png';
import qb4 from '../images/quizbaker4.png';
import qb5 from '../images/quizbaker5.png';
import ss1 from '../images/ss1.png';
import ss2 from '../images/ss2.png';
import ss3 from '../images/ss3.png';
import ss4 from '../images/ss4.png';
import ss5 from '../images/ss5.png';
import up4 from '../images/up4.png';
import up41 from '../images/up41.png';
import up42 from '../images/up42.png';
import up43 from '../images/up43.png';

const Wrapper = styled.div`
	max-width: 1400px;
	display: flex;
	flex-wrap: wrap;

	justify-content: space-between;
	margin: 20px auto;
	@media (max-width: 1300px) {
		justify-content: center;
	}
`;

const ProjectWrapper = styled.div`
	/* padding: 0 20px; */
	margin: 40px 10px;
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
		repo: 'https://github.com/Lambda-School-Labs/labs10-date-planning',
		icons: [
			<GraphqlIcon />,
			<CSSIcon />,
			<NodeIcon />,
			<SassIcon />,
			<ReactIcon />,
			<HerokuIcon />
		],
		images: [{ original: up4 }, { original: up41 }, { original: up42 }, { original: up43 }]
	},
	{
		title: 'Eastside Swim School',
		link: 'https://www.eastsideswimschool.com/',
		repo: 'https://github.com/cooltable/eastside-swim-school',
		icons: [<GatsbyIcon />, <CSSIcon />, <GraphqlIcon />, <ReactIcon />, <JsIcon />],
		images: [
			{ original: ss1 },
			{ original: ss2 },
			{ original: ss3 },
			{ original: ss4 },
			{ original: ss5 }
		]
	},
	{
		title: 'Quiz Baker',
		link: 'https://quiz-baker.com/',
		repo: 'https://github.com/llwor94/quiz-baker',
		icons: [
			<GatsbyIcon />,
			<CSSIcon />,
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
							<a href={project.link}>Live Site</a> &bull;
							<a href={project.repo}>Project Repository</a>
						</div>
					</div>
					<hr />
				</ProjectWrapper>
			);
		})}
	</Wrapper>
);

export default Projects;
