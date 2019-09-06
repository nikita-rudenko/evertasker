import styled from 'styled-components';



export const TaskCategoriesSC = styled.div`
	background: ${props => props.theme.colors.white};
	display: flex;
	justify-content: space-around;
	padding: 20px 30px;
`;

export const TaskCategorySC = styled.div`
	background: ${props => props.theme.colors.blue.dark};
	border-radius: 4px;
	box-shadow: ${props => props.theme.boxShadow.lighter};
	color: ${props => props.theme.colors.white};
	opacity: 0.8;
	padding: 8px 20px;
	transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
	
	&:hover{
		box-shadow: ${props => props.theme.boxShadow.normal};
		cursor: pointer;
		opacity: 1;
	}
`;
