import React from 'react';
import PropTypes from 'prop-types';

// Styled
import { MainSC } from './style';
// Components
import DetailsView from '../DetailsView';
import AnimatedMain from './AnimatedMain';



const Main = ({ isFullView, openedTaskId }) => {
    return (
        <MainSC isFullView={isFullView}>
            <AnimatedMain trigger={isFullView} timeout={500}>
                <DetailsView
                    openedTaskId={openedTaskId}
                    isFullView={isFullView}
                />
            </AnimatedMain>
        </MainSC>
    );
};

Main.propTypes = {
    isFullView: PropTypes.bool.isRequired,
    openedTaskId: PropTypes.string
};

export default Main;
