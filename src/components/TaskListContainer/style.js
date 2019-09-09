import styled from 'styled-components';



export const TaskListContainerSC = styled.div`
	background: ${({ theme }) => theme.themeColors.tertiary};
	height: calc(80vh - 180px);
	overflow-y: auto;
	padding: 0 20px;
    transition: ${({ theme }) => theme.transitions.onToggleTheme};

	
	&::-webkit-scrollbar-thumb {
		background: ${({ theme }) => theme.themeColors.secondary};
        border-radius: 2px;
	}
	
	&::-webkit-scrollbar {
		width: 10px;
	}
`;
