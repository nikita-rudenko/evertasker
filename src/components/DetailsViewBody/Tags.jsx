import React from 'react';
import PropTypes from 'prop-types';

// Styled
import { TagsSC } from './style';



const Tags = ({ tags }) => {
    return Array.isArray(tags) 
        ? <div>
            <TagsSC>
                {tags.map((tag, idx) => (
                    <li key={idx}>{tag}</li>
                ))}
            </TagsSC>
        </div> 
        : null;
};

Tags.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string)
};

export default Tags;
