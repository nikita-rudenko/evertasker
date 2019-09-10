import styled from 'styled-components';

// Theme helpers
import { getStyleVariable } from '../../theme/helpers';



export const TaskSC = styled.div`
	align-items: center;
	background: ${getStyleVariable('constColors', 'taskColor1')};
	box-shadow: ${getStyleVariable('boxShadow', 'lighter')};
	display: flex;
	height: 140px;
	justify-content: center;
	margin: 20px 0;
	transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
	width: 100%;
	
	&:hover {
		box-shadow: ${getStyleVariable('boxShadow', 'normal')};
		cursor: pointer;
	}
`;
