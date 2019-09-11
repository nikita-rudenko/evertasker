import React from 'react';
import PropTypes from 'prop-types';



const DetailsViewBody = ({ description }) => {
    return <div>{description}</div>;
};

DetailsViewBody.propTypes = {
    description: PropTypes.string
};

export default DetailsViewBody;
