import React from 'react';
import PropTypes from 'prop-types';

// Styled
import { TaskSC } from './style';



const Task = ({ changeOpenedTaskId, id, title }) => {
    return (
        <TaskSC data-id={id} onClick={() => changeOpenedTaskId(id)}>
            {title}
        </TaskSC>
    );
};

Task.propTypes = {
    changeOpenedTaskId: PropTypes.func.isRequired,
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    title: PropTypes.string
};

export default Task;
