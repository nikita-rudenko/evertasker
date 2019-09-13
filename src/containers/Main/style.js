import styled from 'styled-components';

// Theme helpers
import { getCurrentThemeColor, getStyleVariable } from '../../theme/helpers';



export const MainSC = styled.div`
    position: relative;
    transition: width 0.4s ease-in;
    background: ${getCurrentThemeColor('tertiary')};
    box-shadow: ${getStyleVariable('boxShadow', 'strongest')};
    height: 80vh;
    margin-top: 100px;
    padding: 0;
    width: ${({ isFullView }) => (isFullView ? '800px' : '0px')};
`;
