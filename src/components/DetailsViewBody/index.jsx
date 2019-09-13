import React from 'react';
import PropTypes from 'prop-types';

// Styled
import { DetailsViewBodySC } from './style';
// Components
import Description from './Description';
import Assignees from './Assignees';
import MetaInfo from './MetaInfo';
import Tags from './Tags';
import Todo from './Todo';



const DetailsViewBody = ({
    task: {
        assignees,
        color,
        created,
        deadline,
        description,
        priority,
        status,
        tags,
        todo
    }
}) => {
    return (
        <DetailsViewBodySC color={color}>
            <Tags tags={tags} />
            <MetaInfo
                created={created}
                deadline={deadline}
                priority={priority}
                status={status}
            />
            <Description description={description} />
            <Todo todo={todo} />
            <Assignees assignees={assignees} />
        </DetailsViewBodySC>
    );
};

DetailsViewBody.propTypes = {
    task: PropTypes.object
};

export default DetailsViewBody;
