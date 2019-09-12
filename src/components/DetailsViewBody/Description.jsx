import React from 'react';
import PropTypes from 'prop-types';

// Styled
import { DescriptionSC, TaskSubheadingSC, DescriptionTextSC } from './style';



const Description = ({ description }) => {
    return (
        <DescriptionSC>
            <TaskSubheadingSC>Description</TaskSubheadingSC>
            <DescriptionTextSC>{description}</DescriptionTextSC>
        </DescriptionSC>
    );
};

Description.propTypes = {
    description: PropTypes.string
};

export default Description;
