import React from 'react';
import PropTypes from 'prop-types';



const DetailsViewHeader = ({ title }) => {
    return <div>{title}</div>;
};

DetailsViewHeader.propTypes = {
    title: PropTypes.string
};

export default DetailsViewHeader;
