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
    openedTaskId,
    task: { id, tags, todo, title, assignees, status, created }
}) => {
    return (
        <TaskSC
            data-id={id}
            isOpened={openedTaskId === id}
            onClick={() => changeOpenedTaskId(id)}
        >
            <TagsSC>
                <Tags tags={tags} />
            </TagsSC>
            <StatusSC>
                <Status status={status} />
            </StatusSC>
            <TitleSC>{title}</TitleSC>
            <TaskInfo assignees={assignees} todo={todo} created={created} />
        </TaskSC>
    );
};

Task.propTypes = {
    changeOpenedTaskId: PropTypes.func.isRequired,
    openedTaskId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    tags: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string,
    task: PropTypes.object
};

export default Task;
