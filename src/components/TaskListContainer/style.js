import styled from 'styled-components';

// Theme helpers
import { getCurrentThemeColor, getStyleVariable } from '../../theme/helpers';



export const TaskListContainerSC = styled.div`
	background: ${getCurrentThemeColor('tertiary')};
	height: calc(80vh - 180px);
	overflow-y: auto;
	padding: 0 20px;
    transition: ${getStyleVariable('transitions', 'onToggleTheme')};

	
	&::-webkit-scrollbar-thumb {
		background: ${getCurrentThemeColor('secondary')};
        border-radius: 2px;
	}
	
	&::-webkit-scrollbar {
		width: 10px;
	}
`;
