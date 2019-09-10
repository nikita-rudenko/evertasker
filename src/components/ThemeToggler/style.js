import styled from 'styled-components';

// Theme helpers
import { getStyleVariable, getCurrentThemeColor } from '../../theme/helpers';



export const ThemeTogglerSC = styled.div`
    position: absolute;
    cursor: pointer;
    top: 40px;
    right: 60px;
    width: 60px;
    padding: 10px;
    border-radius: 50%;
    user-select: none;
    transition: ${getStyleVariable('transitions', 'bgOnToggleTheme')};
    background: ${getCurrentThemeColor('secondary')};
    box-shadow: ${getStyleVariable('boxShadow', 'stronger')};
`;

export const ToggleIconSC = styled.img`
    height: 40px;
`;
