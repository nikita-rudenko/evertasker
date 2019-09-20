import PropTypes from 'prop-types';
import React from 'react';

// Images
import archive from '../../assets/archive.jpg';
import ongoing from '../../assets/svg/ongoing.svg';
import success from '../../assets/svg/success.svg';
// Styled
import { StatusIconSC } from './style';



const Status = ({ status }) => {
    const renderStatus = () => {
        switch (status) {
        case 1:
            return <StatusIconSC src={ongoing} title='Active task' />;
        case 2:
            return <StatusIconSC src={success} title='Completed task' />;
        case 3:
            return <StatusIconSC src={archive} title='Archived task' />;

        default:
            return null;
        }
    };

    return <div>{renderStatus()}</div>;
};

Status.propTypes = {
    status: PropTypes.number
};

export default Status;
