import React from 'react';
import PropTypes from 'prop-types';

// Styled
import { TaskListContainerSC } from './style';
// Components
import Task from '../Task';
import Loading from '../Loading';



const TaskListContainer = ({ tasks, isLoading, changeOpenedTaskId }) => {
    return (
        <TaskListContainerSC>
            {!isLoading && Array.isArray(tasks) ? (
                tasks.map((task) => (
                    <Task
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
    changeOpenedTaskId: PropTypes.func.isRequired
};

export default TaskListContainer;
