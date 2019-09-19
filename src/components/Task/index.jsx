import { TaskInfo } from './TaskInfo';
import React from 'react';
import PropTypes from 'prop-types';

// Styled
import { TaskSC, TitleSC, TagsSC, StatusSC } from './style';
// Components
import Tags from '../DetailsViewBody/Tags';
import Status from '../Status';



const Task = ({
    changeOpenedTaskId,
    isOpened,
    hasTodo,
    assignees,
    task: { id, tags, title, status, created }
}) => {
    return (
        <TaskSC data-id={id} isOpened={isOpened} onClick={changeOpenedTaskId}>
            <TagsSC>
                <Tags tags={tags} />
            </TagsSC>
            <StatusSC>
                <Status status={status} />
            </StatusSC>
            <TitleSC>{title}</TitleSC>
            <TaskInfo
                assignees={assignees}
                hasTodo={hasTodo}
                created={created}
            />
        </TaskSC>
    );
};

Task.propTypes = {
    assignees: PropTypes.string,
    changeOpenedTaskId: PropTypes.func.isRequired,
    hasTodo: PropTypes.bool,
    id: PropTypes.string,
    isOpened: PropTypes.bool,
    tags: PropTypes.arrayOf(PropTypes.string),
    task: PropTypes.object,
    title: PropTypes.string
};

export default Task;
