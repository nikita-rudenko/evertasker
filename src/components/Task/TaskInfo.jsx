import React from 'react';
import PropTypes from 'prop-types';

// Images
import clipboard from '../../assets/svg/clipboard.svg';
import user from '../../assets/svg/user.svg';
import tag from '../../assets/svg/tag.svg';
// Styled
import {
    TaskInfoSC,
    TaskInfoItemSC,
    IconSC,
    TaskInfoItemRightSC
} from './style';



export function TaskInfo({ todo, assignees, created }) {
    return (
        <TaskInfoSC>
            {todo ? (
                <TaskInfoItemSC title='Has todo'>
                    <IconSC src={clipboard} />
                </TaskInfoItemSC>
            ) : null}

            <TaskInfoItemSC title='Assignees'>
                <IconSC src={user} />
                {`${assignees[0]}${
                    assignees.length - 1 > 0
                        ? ` and ${assignees.length - 1} others`
                        : ''
                }`}
            </TaskInfoItemSC>

            <TaskInfoItemRightSC>
                <IconSC src={tag} />
                {created}
            </TaskInfoItemRightSC>
        </TaskInfoSC>
    );
}

TaskInfo.propTypes = {
    assignees: PropTypes.arrayOf(PropTypes.string),
    created: PropTypes.string,
    todo: PropTypes.arrayOf(PropTypes.string)
};

export default TaskInfo;
