import styled from 'styled-components';

// Theme helpers
import { getStyleVariable, getCurrentThemeColor } from '../../theme/helpers';



export const DetailsViewFooterSC = styled.div`
	align-items: center;
	background: ${getCurrentThemeColor('primary')};
	display: flex;
	height: 60px;
	justify-content: flex-end;
	padding: 0 40px;
`;

export const EditButtonSC = styled.button`
	background: ${getStyleVariable('constColors', 'accent')};
	border-radius: 4px;
	border: none;
	box-shadow: ${getStyleVariable('boxShadow', 'lighter')};
	color: #fff;
	cursor: pointer;
	font-size: 1.4rem;
	padding: 6px 10px;
`;
