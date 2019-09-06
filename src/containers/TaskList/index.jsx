import React from 'react';

// Components
import Logo from '../../components/Logo';
import TaskCategories from '../../components/TaskCategories';
import TaskListContainer from '../../components/TaskListContainer';
// Styles
import { TaskListSC, TaskListHeaderSC, LogoContainerSC } from './style';



const TaskList = () => {
    return (
        <TaskListSC>
            <TaskListHeaderSC>
                <LogoContainerSC>
                    <Logo />
                </LogoContainerSC>
                <TaskCategories />
            </TaskListHeaderSC>
            <TaskListContainer />
        </TaskListSC>
    );
};

export default TaskList;
