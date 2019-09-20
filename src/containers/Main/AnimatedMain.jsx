import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Transition } from 'react-transition-group';

// Theme helpers
import { getStyleVariable } from '../../theme/helpers';



const AnimatedMain = ({ children, trigger, timeout }) => {
    return (
        <Transition in={trigger} timeout={timeout}>
            {state => <AnimationSC state={state}>{children}</AnimationSC>}
        </Transition>
    );
};

const AnimationSC = styled.div`
    transition: 0.3s;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: ${getStyleVariable('boxShadow', 'strongest')};
    height: ${({ state }) => (state === 'entered' ? '100%' : 0)};
    width: ${({ state }) => (state === 'entered' ? '100%' : 0)};
    opacity: ${({ state }) => (state === 'entered' ? 1 : 0)};
`;

AnimatedMain.propTypes = {
    children: PropTypes.node.isRequired,
    trigger: PropTypes.bool.isRequired,
    timeout: PropTypes.number
};

export default AnimatedMain;
