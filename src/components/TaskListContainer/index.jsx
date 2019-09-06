import React from 'react';

// Components
import Task from '../Task';
// Styled
import { TaskListContainerSC } from './style';



const TaskListContainer = () => {
    return (
        <TaskListContainerSC>
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
        </TaskListContainerSC>
    );
};

export default TaskListContainer;
