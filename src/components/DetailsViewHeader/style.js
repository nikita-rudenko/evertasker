import styled from 'styled-components';

// Theme helpers
import { getCurrentThemeColor } from '../../theme/helpers';



export const DetailsViewHeaderSC = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    padding: 0 40px;
    background: ${getCurrentThemeColor('primary')};
`;

export const TaskTitleSC = styled.h1`
    color: white;
    margin: 0;
    font-size: 24px;
`;
