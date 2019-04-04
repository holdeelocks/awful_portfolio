import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Page = styled.div`
	position: 'absolute';
	height: 100vh;
	width: 100%;
	background-color: #0e132f;
`;

export const Nav = styled.nav`
	width: 100%;
	display: flex;
	flex-flow: row nowrap;
	justify-content: flex-end;
	padding: 2.5% 0;

	@media (max-width: 540px) {
		margin: 0 auto;
		justify-content: center;
		align-items: center;
		padding-top: 27.5%;
	}
`;

export const SubNav = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 12.5%;
	padding: 1%;
	padding-right: 7.5%;
	z-index: 1;
	a {
		font-size: 3vw;
		color: white;
	}

	@media (max-width: 800px) {
		width: 15%;
		a {
			font-size: 5vw;
		}
	}

	@media (max-width: 540px) {
		width: 30%;
		align-items: center;
		padding: 0;
		a {
			font-size: 6.5vw;
		}
	}
`;

// export const NamePlate = styled.div`
// 	position: absolute;
// 	color: white;
// 	bottom: 60%;
// 	right: 50%;
// 	margin: 0;
// 	padding: 0;

// 	display: flex;
// 	flex-direction: column;
// 	justify-content: space-between;
// `;

export const Heading = styled.h1`
	color: white;
	position: absolute;
	bottom: 50%;
	right: 55%;
	font-size: 2.6rem;
	font-weight: bold;
	margin: 0;
	padding: 0;

	@media (max-width: 800px) {
		font-size: 2.5rem;
		font-weight: normal;
		right: 50%;
	}

	@media (max-width: 540px) {
		right: 30%;
		bottom: 55%;
		width: 40%;
		text-align: center;
	}
`;

export const SubHeading = styled.p`
	color: white;
	position: absolute;
	font-size: 1.5rem;
	bottom: 45%;
	right: 55%;
	margin: 0;
	padding: 0;

	@media (max-width: 800px) {
		font-size: 1.4rem;
		right: 50%;
	}

	@media (max-width: 540px) {
		right: 30%;
		bottom: 50%;
		width: 40%;
		text-align: center;
		font-size: 1.2rem;
	}
`;

export const LinkList = styled.ul`
	position: absolute;
	bottom: 47.5%;
	right: 30%;
	display: flex;
	width: 23.5%;
	align-items: center;
	justify-content: space-between;
	color: white;
	z-index: 1;
	li {
		float: center;
		position: relative;
		a {
			cursor: pointer;
			color: white;
			font-size: 1.5rem;
			font-weight: 100;
			text-decoration: none;
			display: block;
			background: transparent;
		}
		&:hover span {
			position: absolute;
			left: 50%;
			top: 50%;
			margin-left: -40%;
			width: 80%;
			height: 0px;
			box-shadow: 0 0 20px 12px rgba(150, 180, 200, 0.6);
			border-radius: 10px 6px;
		}
	}

	@media (max-width: 900px) {
		flex-direction: column;
		justify-content: center;
		bottom: 40%;
		li {
			float: center;

			a {
				font-size: 1.4rem;
			}
		}
	}

	@media (max-width: 540px) {
		right: 30%;
		bottom: 30%;
		width: 40%;
	}
`;

export const NiceLink = styled(Link)`
	/* &:hover {
		/* color: palevioletred; */
	/* text-shadow: 0 0 5px #ff0000; */

	/* text-shadow: 2px 2px 10px #000000; */

	/* filter: dropshadow(color=#000000, offx=2, offy=2); */
	/* } */
`;

// PROJECTS PAGE STYLES

export const SubCatWrapper = styled.section`
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

export const ProjectWrap = styled.div`
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
		margin-top: 10%;
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

export const ProjectHeader = styled.h2`
	color: #0e132f;
	font-size: 3rem;
	margin: 0 auto;
	padding: 5% 0;
	margin: 0 auto 2%;
	text-shadow: 5px 5px lightgrey;
	text-align: center;
	width: 100%;
`;
