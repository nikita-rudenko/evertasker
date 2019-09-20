import React from 'react';
import PropTypes from 'prop-types';

// Styled
import { TaskListContainerSC } from './style';
// Components
import Task from '../Task';
import Loading from '../Loading';



const TaskListContainer = ({
    tasks,
    isLoading,
    openedTaskId,
    changeOpenedTaskId,
    isPristine
}) => {
    const renderTaskList = () => {
        if (!isLoading && tasks.length) {
            return tasks.map(task => {
                const { id, todo, assignees } = task;

                const assigneesStr = `${assignees[0]}${
                    assignees.length - 1 > 0
                        ? ` and ${assignees.length - 1} others`
                        : ''
                }`;

                return (
                    <Task
                        openedTaskId={openedTaskId}
                        changeOpenedTaskId={changeOpenedTaskId}
                        key={id}
                        hasTodo={todo !== undefined}
                        assignees={assigneesStr}
                        isOpened={openedTaskId === id}
                        task={task}
                    />
                );
            });
        } else if (!isLoading && !tasks.length && !isPristine) {
            return <h2>No tasks</h2>;
        } else {
            return <Loading />;
        }
    };

    return <TaskListContainerSC>{renderTaskList()}</TaskListContainerSC>;
};

TaskListContainer.propTypes = {
    isLoading: PropTypes.bool,
    tasks: PropTypes.arrayOf(PropTypes.object),
    error: PropTypes.object,
    changeOpenedTaskId: PropTypes.func.isRequired,
    openedTaskId: PropTypes.string,
    isPristine: PropTypes.bool
};

export default TaskListContainer;
