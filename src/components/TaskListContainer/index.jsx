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
    changeOpenedTaskId
}) => {
    return (
        <TaskListContainerSC>
            {!isLoading && Array.isArray(tasks) ? (
                tasks.map(task => {
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
                })
            ) : (
                <Loading />
            )}
        </TaskListContainerSC>
    );
};

TaskListContainer.propTypes = {
    isLoading: PropTypes.bool,
    tasks: PropTypes.arrayOf(PropTypes.object),
    error: PropTypes.object,
    changeOpenedTaskId: PropTypes.func.isRequired,
    openedTaskId: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default TaskListContainer;
