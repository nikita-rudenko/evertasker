import React from 'react';
import PropTypes from 'prop-types';

// Styled
import { MainSC } from './style';
// Components
import DetailsView from '../DetailsView';



const Main = ({ isFullView, openedTaskId }) => {
    return (
        <MainSC isFullView={isFullView}>
            <DetailsView openedTaskId={openedTaskId} isFullView={isFullView} />
        </MainSC>
    );
};

Main.propTypes = {
    isFullView: PropTypes.bool.isRequired,
    openedTaskId: PropTypes.string
};

export default Main;
