import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

// Components
import Logo from '../../components/Logo';
import TaskCategories from '../../components/TaskCategories';
import TaskListContainer from '../../components/TaskListContainer';
// Styles
import { SidebarSC, TaskListHeaderSC, LogoContainerSC } from './style';
// Actions
import { actions } from '../../state/ducks/tasks';



const Sidebar = ({ isFullView, openedTaskId, changeOpenedTaskId }) => {
    const dispatch = useDispatch();
    const { tasksData, error, isLoading } = useSelector(
        state => state.tasks,
        shallowEqual
    );

    useEffect(() => {
        dispatch(actions.getTasks());
    }, [dispatch]);

    return (
        <SidebarSC isFullView={isFullView}>
            <TaskListHeaderSC>
                <LogoContainerSC>
                    <Logo />
                </LogoContainerSC>
                <TaskCategories />
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
    openedTaskId: PropTypes.number,
    changeOpenedTaskId: PropTypes.func.isRequired,
    isFullView: PropTypes.bool.isRequired
};

export default Sidebar;
