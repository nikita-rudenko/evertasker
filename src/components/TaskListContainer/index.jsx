import React from 'react';
import styled from 'styled-components';

// Theme
import { theme } from '../../theme';
// Components
import Task from '../Task';



const TaskListContainer = () => {
    return (
        <StyledTaskListContainer>
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
        </StyledTaskListContainer>
    );
};

const StyledTaskListContainer = styled.div`
	background: ${theme.colors.white};
	height: calc(80vh - 180px);
	overflow-y: auto;
	padding: 0 20px;

	
	&::-webkit-scrollbar-thumb {
		background: ${theme.colors.grey.dark};
        border-radius: 2px;
	}
	
	&::-webkit-scrollbar {
		background: ${theme.colors.grey.light};
		width: 10px;
	}
`;

export default TaskListContainer;
