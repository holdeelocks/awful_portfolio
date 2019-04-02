import styled from 'styled-components';

export const Name = styled.h1`
	color: white;
	position: absolute;
	bottom: 50%;
	right: 50%;
	font-size: 2.6rem;
	font-weight: 400;
`;

export const SubHeading = styled.p`
	color: white;
	position: absolute;
	font-size: 2rem;
	bottom: 42.5%;
	right: 50%;
`;

export const Header = styled.header`
	width: 100%;
	display: flex;
	flex-flow: row nowrap;
	justify-content: flex-end;
	padding: 2.5% 0;
`;

export const IconWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 10%;
	padding: 1%;
	padding-right: 7.5%;
	z-index: 2;
`;
