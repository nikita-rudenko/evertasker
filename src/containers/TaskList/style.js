import styled from 'styled-components';



export const TaskListSC = styled.div`
	background: ${({ theme }) => theme.themeColors.primary};
	box-shadow: ${({ theme }) => theme.boxShadow.strongest};
	height: 80vh;
	margin-top: 100px;
	width: 600px;
`;

export const TaskListHeaderSC = styled.div`
	box-shadow: ${({ theme }) => theme.boxShadow.lighter};
	height: 180px;
	position: relative;
	z-index: 1;
`;

export const LogoContainerSC = styled.div`
	display: flex;
	justify-content: center;
	padding: 20px 10px;
	& > img {
		height: 56px;
		width: 300px;
	}
`;
