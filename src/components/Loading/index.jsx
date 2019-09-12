import React from 'react';

// Styled
import { LoadingSC } from './style';
// Images
import loading from '../../assets/svg/loading.svg';



const Loading = () => {
    return <LoadingSC src={loading} alt='Loading...' />;
};

export default Loading;
