import React from 'react';
import PropTypes from 'prop-types';

// Styled
import { TaskSC } from './style';



const Task = ({ title }) => {
    return <TaskSC>{title}</TaskSC>;
};

Task.propTypes = {
    title: PropTypes.string
};

export default Task;
