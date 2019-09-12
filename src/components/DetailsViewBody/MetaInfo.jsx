import React from 'react';
import PropTypes from 'prop-types';

// Styled
import { MetaInfoSC, LabelSC, MetaItemSC } from './style';



const MetaInfo = meta => {
    return (
        <MetaInfoSC>
            {Object.keys(meta).map((metaItem, idx) => {
                return meta[metaItem] ? (
                    <div key={idx}>
                        <LabelSC>{metaItem}</LabelSC>
                        <MetaItemSC>{meta[metaItem]}</MetaItemSC>
                    </div>
                ) : null;
            })}
        </MetaInfoSC>
    );
};

MetaInfo.propTypes = {
    created: PropTypes.string,
    deadline: PropTypes.string,
    priority: PropTypes.number,
    status: PropTypes.number
};

export default MetaInfo;
