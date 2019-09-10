import React from 'react';
import PropTypes from 'prop-types';

// Components
import Task from '../Task';
// Styled
import { TaskListContainerSC } from './style';



const TaskListContainer = ({ tasks, isLoading }) => {
    return (
        <TaskListContainerSC>
            {!isLoading && Array.isArray(tasks)
                ? tasks.map(task => <Task key={task.id} title={task.title} />)
                : null}
        </TaskListContainerSC>
    );
};

TaskListContainer.propTypes = {
    isLoading: PropTypes.bool,
    tasks: PropTypes.arrayOf(PropTypes.object),
    error: PropTypes.object
};

export default TaskListContainer;
