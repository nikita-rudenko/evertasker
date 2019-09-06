import React from 'react';

// Components
import TaskCategory from './TaskCategory';
// Styled
import { TaskCategoriesSC } from './style';



const TaskCategories = () => {
    return (
        <TaskCategoriesSC>
            <TaskCategory />
            <TaskCategory />
            <TaskCategory />
            <TaskCategory />
        </TaskCategoriesSC>
    );
};

export default TaskCategories;
