import React, { useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

// Actions
import { actions } from '../../state/ducks/tasks';
// Styled
import { SidebarSC, TaskListHeaderSC, LogoContainerSC } from './style';
// Components
import Logo from '../../components/Logo';
import TaskCategories from '../../components/TaskCategories';
import TaskListContainer from '../../components/TaskListContainer';



const Sidebar = ({ isFullView, openedTaskId, changeOpenedTaskId }) => {
    const dispatch = useDispatch();
    const { tasksData, isLoading, error } = useSelector(
        state => state.tasks,
        shallowEqual
    );

    const [currentCategory, setCurrentCategory] = useState(0);

    const changeCategory = selectedCategory =>
        setCurrentCategory(Number(selectedCategory));

    useEffect(() => {
        dispatch(actions.getTasks(currentCategory));
    }, [currentCategory, dispatch]);

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
