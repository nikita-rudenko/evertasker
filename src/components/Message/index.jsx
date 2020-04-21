import React from 'react';
import PropTypes from 'prop-types';

// Styled
import { MessageSC } from './style';



const Message = ({ children }) => {
    return <MessageSC>{children}</MessageSC>;
};

Message.propTypes = {
    children: PropTypes.node.isRequired
};

export default Message;
