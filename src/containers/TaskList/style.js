import styled from 'styled-components';

// Theme
import { theme } from '../../theme';



export const TaskListSC = styled.div`
	background: ${theme.colors.white};
	box-shadow: ${theme.boxShadow.strongest};
	height: 80vh;
	margin-top: 100px;
	width: 600px;
`;

export const TaskListHeaderSC = styled.div`
	box-shadow: ${theme.boxShadow.lighter};
	height: 180px;
	position: relative;
	z-index: 1;
`;

export const LogoContainerSC = styled.div`
	background: ${theme.colors.grey.dark};
	display: flex;
	justify-content: center;
	padding: 20px 10px;
	& > img {
		height: 56px;
		width: 300px;
	}
`;
