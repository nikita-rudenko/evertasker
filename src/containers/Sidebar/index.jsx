import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

// Components
import Logo from '../../components/Logo';
import TaskCategories from '../../components/TaskCategories';
import TaskListContainer from '../../components/TaskListContainer';
// Styles
import { SidebarSC, TaskListHeaderSC, LogoContainerSC } from './style';
// Actions
import { actions } from '../../state/ducks/tasks';



const Sidebar = () => {
    const dispatch = useDispatch();
    const { tasksData, error, isLoading } = useSelector(
        state => state.tasks,
        shallowEqual
    );

    useEffect(() => {
        dispatch(actions.getTasks());
    }, [dispatch]);

    return (
        <SidebarSC>
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
            />
        </SidebarSC>
    );
};

export default Sidebar;
