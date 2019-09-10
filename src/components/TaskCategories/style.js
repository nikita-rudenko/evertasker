import styled from 'styled-components';

// Theme helpers
import { getStyleVariable } from '../../theme/helpers';



export const TaskCategoriesSC = styled.div`
	display: flex;
	justify-content: space-around;
	padding: 20px 30px;
`;

export const TaskCategorySC = styled.div`
	background: ${getStyleVariable('constColors', 'accent')};
	border-radius: 4px;
	box-shadow: ${getStyleVariable('boxShadow', 'lighter')};
    font-size: 1.4rem;
	color: #fff;
	padding: 8px 20px;
	transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
	
	&:hover{
		box-shadow: ${getStyleVariable('boxShadow', 'normal')};
		cursor: pointer;
	}
`;
