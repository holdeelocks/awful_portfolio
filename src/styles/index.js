import styled from 'styled-components';

export const AppWrap = styled.div`
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
`;

export const SubNav = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 10%;
	padding: 1%;
	padding-right: 7.5%;
	z-index: 1;
`;

export const NamePlate = styled.div`
	color: white;
	position: absolute;
	bottom: 50%;
	right: 50%;
	border: 1px solid white;
	margin: 0;
	padding: 0;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const Heading = styled.h1`
	color: white;
	position: absolute;
	bottom: 55%;
	right: 55%;
	font-size: 2.6rem;
	font-weight: bold;
	margin: 0;
	padding: 0;
`;

export const SubHeading = styled.p`
	color: white;
	position: absolute;
	font-size: 1.8rem;
	/* font-weight: 100; */
	bottom: 47.5%;
	right: 55%;
	margin: 0;
	padding: 0;
`;

export const LinkWrap = styled.div`
	position: absolute;
	bottom: 50%;
	right: 27.5%;
	display: flex;
	width: 25%;
	align-items: center;
	justify-content: space-between;
	color: white;
	z-index: 1;

	a {
		cursor: pointer;
		color: white;
		font-size: 1.5rem;
		font-weight: 100;
		text-decoration: none;
		padding: 0 2%;

		&:hover {
			color: palevioletred;
			text-decoration: underline;
		}
	}
`;
