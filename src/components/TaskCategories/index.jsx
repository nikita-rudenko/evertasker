import React from 'react';
import styled from 'styled-components';

// Theme
import { theme } from '../../config/theme';
// Components
import TaskCategory from './TaskCategory';



const TaskCategories = () => {
    return (
        <TaskCategoriesContainer>
            <TaskCategory />
            <TaskCategory />
            <TaskCategory />
            <TaskCategory />
        </TaskCategoriesContainer>
    );
};

const TaskCategoriesContainer = styled.div`
	background: ${theme.colors.white};
	display: flex;
	justify-content: space-around;
	padding: 20px 30px;
`;

export default TaskCategories;
