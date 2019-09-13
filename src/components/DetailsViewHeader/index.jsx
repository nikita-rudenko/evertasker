import React from 'react';
import PropTypes from 'prop-types';

// Styled
import { DetailsViewHeaderSC, TaskTitleSC } from './style';



const DetailsViewHeader = ({ title }) => {
    return (
        <DetailsViewHeaderSC>
            <TaskTitleSC>{title}</TaskTitleSC>
        </DetailsViewHeaderSC>
    );
};

DetailsViewHeader.propTypes = {
    title: PropTypes.string
};

export default DetailsViewHeader;
