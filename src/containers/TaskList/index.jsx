import React from 'react';
import styled from 'styled-components';

// Theme
import { theme } from '../../config/theme';
// Components
import Logo from '../../components/Logo';
import TaskCategories from '../../components/TaskCategories';
import TaskListContainer from '../../components/TaskListContainer';



const TaskList = () => {
    return (
        <StyledTaskList>
            <StyledTaskListHeader>
                <LogoContainer>
                    <Logo />
                </LogoContainer>
                <TaskCategories />
            </StyledTaskListHeader>
            <TaskListContainer />
        </StyledTaskList>
    );
};

const StyledTaskList = styled.div`
	background: ${theme.colors.white};
	box-shadow: ${theme.boxShadow.strongest};
	height: 80vh;
	margin-top: 100px;
	width: 600px;
`;

const StyledTaskListHeader = styled.div`
	box-shadow: ${theme.boxShadow.lighter};
	height: 180px;
	position: relative;
	z-index: 1;
`;

const LogoContainer = styled.div`
	background: ${theme.colors.grey.dark};
	box-shadow: 0 4px 2px -2px gray;
	display: flex;
	justify-content: center;
	padding: 20px 10px;
    
	& > img {
		height: 56px;
		width: 300px;
	}
`;

export default TaskList;
