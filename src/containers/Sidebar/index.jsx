import React from 'react';
import PropTypes from 'prop-types';

// Custom hooks
import useGetTaskList from '../../hooks/useGetTaskList';
// Styled
import { SidebarSC, TaskListHeaderSC, LogoContainerSC } from './style';
// Components
import Logo from '../../components/Logo';
import TaskCategories from '../../components/TaskCategories';
import TaskListContainer from '../../components/TaskListContainer';



const Sidebar = ({ isFullView, openedTaskId, changeOpenedTaskId }) => {
    const [
        { tasksData, isLoading, error },
        currentCategory,
        changeCategory
    ] = useGetTaskList();

    return (
        <SidebarSC isFullView={isFullView}>
            <TaskListHeaderSC>
                <LogoContainerSC>
                    <Logo />
                </LogoContainerSC>
                <TaskCategories
                    currentCategory={currentCategory}
                    changeCategory={changeCategory}
                />
            </TaskListHeaderSC>
            <TaskListContainer
                tasks={tasksData}
                isLoading={isLoading}
                error={error}
                openedTaskId={openedTaskId}
                changeOpenedTaskId={changeOpenedTaskId}
            />
        </SidebarSC>
    );
};

Sidebar.propTypes = {
    openedTaskId: PropTypes.string,
    changeOpenedTaskId: PropTypes.func.isRequired,
    isFullView: PropTypes.bool.isRequired
};

export default Sidebar;
