import React from 'react';
import PropTypes from 'prop-types';

// Styled
import { AssigneesListSC, AssigneesSC, TaskSubheadingSC } from './style';



const Assignees = ({ assignees }) => {
    return (
        <AssigneesSC>
            <TaskSubheadingSC>Assignees</TaskSubheadingSC>
            <AssigneesListSC>
                {assignees.map((assignee, idx) => (
                    <li key={idx}>{assignee}</li>
                ))}
            </AssigneesListSC>
        </AssigneesSC>
    );
};

Assignees.propTypes = {
    assignees: PropTypes.arrayOf(PropTypes.string)
};

export default Assignees;
