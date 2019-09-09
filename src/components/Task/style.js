import styled from 'styled-components';



export const TaskSC = styled.div`
	align-items: center;
	background: ${({ theme }) => theme.constColors.task3};
	box-shadow: ${({ theme }) => theme.boxShadow.lighter};
	display: flex;
	height: 140px;
	justify-content: center;
	margin: 20px 0;
	transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
	width: 100%;
	
	&:hover {
		box-shadow: ${({ theme }) => theme.boxShadow.normal};
		cursor: pointer;
	}
`;
