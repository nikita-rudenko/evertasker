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
                tasks.map(task => (
                    <Task
                        openedTaskId={openedTaskId}
                        changeOpenedTaskId={changeOpenedTaskId}
                        key={task.id}
                        task={task}
                    />
                ))
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
