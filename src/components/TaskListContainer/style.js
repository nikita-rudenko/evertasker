import styled from 'styled-components';



export const TaskListContainerSC = styled.div`
	background: ${props => props.theme.colors.white};
	height: calc(80vh - 180px);
	overflow-y: auto;
	padding: 0 20px;

	
	&::-webkit-scrollbar-thumb {
		background: ${props => props.theme.colors.grey.dark};
        border-radius: 2px;
	}
	
	&::-webkit-scrollbar {
		background: ${props => props.theme.colors.grey.light};
		width: 10px;
	}
`;
