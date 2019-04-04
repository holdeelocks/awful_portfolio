import styled from 'styled-components';

export const Page = styled.div`
	position: 'absolute';
	height: 100vh;
	width: 100%;
	background-image: linear-gradient(#4b5f80, #4b5f80, #ffffff);
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
	/* right: 30%; */
	right: 42.5%;
	display: flex;
	/* width: 23.5%; */
	width: 7.5%;
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

// SubCat PAGE STYLES

export const SubCatWrapper = styled.section`
	background-image: ${props => (props.url ? null : `linear-gradient(#ffffff, #4b5f80, #4b5f80);`)};
	width: 100%;
	height: ${props => (!props.url ? '100vh' : 'auto')};
	background: ${props =>
		props.url ? `url("${props.url}") no-repeat center center fixed;` : undefined};
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: cover;
	padding: 0;
	position: relative;
	left: 0;
	top: 0;

	.container {
		max-width: ${props => (!props.url ? null : '1200px')};
		margin: 0 auto;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		margin: ${props => (!props.url ? '0' : '0 auto')};
	}

	@media (max-width: 800px) {
		justify-content: center;
	}
`;

// PROJECT PAGE STYLES

export const ProjectWrap = styled.div`
	z-index: 2;
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
		border: 1px solid lightslategrey;

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

export const SubCatHeader = styled.h2`
	color: #0e132f;
	font-size: 3rem;
	margin: 0 auto;
	padding: 5% 0;
	margin: 0 auto 2%;
	text-align: center;
	width: 100%;
`;

// ABOUT ME

export const Jumbo = styled.div`
	position: relative;
	padding: 10px;
	max-height: 100vh;
	background-color: #e0e0e0;
	background-image: url('https://www.transparenttextures.com/patterns/black-thread-light.png');

	margin: 0 0 30px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-bottom: 100px;
	.img {
		display: flex;
		margin: 0 auto;
		max-width: 1400px;
		align-items: center;
		justify-content: space-between;
		@media (max-width: 700px) {
			flex-direction: column;
		}
	}
	svg {
		width: 700px;
		max-width: 70%;
		opacity: 0.7;
		margin-right: 10px;
	}
	.text {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 50%;
	}
	p {
		color: #373737;
		margin-bottom: 5px;
	}
	.inner-inner {
		svg {
			width: auto;
			cursor: pointer;
			border-radius: 50%;
			box-shadow: 0 3px 4px rgba(0, 0, 0, 0.4);
			transition: all 0.2s;
			&:hover {
				box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
				transform: translateY(-2px);
			}
			&:active {
				box-shadow: 0 2px 2px rgba(0, 0, 0, 0.4);
				transform: translateY(2px);
			}
		}
	}
`;

export const Content = styled.div`
	padding: 60px 35px 30px;
	opacity: 1;
	position: relative;
`;
export const Inner = styled.div`
	max-width: 760px;
	margin-left: auto;
	margin-right: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	opacity: 1;
	img {
		height: 130px;
		width: 130px;
		border-radius: 100%;
		margin-bottom: 60px;
	}
	h1 {
		font-size: 98px;
		/* font-family: 'Open Sans', sans-serif; */
		text-align: center;
		padding-top: 15px;
		color: #616161;
		@media (max-width: 500px) {
			font-size: 65px;
		}
	}
`;
