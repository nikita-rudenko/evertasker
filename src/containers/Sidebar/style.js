import styled from 'styled-components';

// Theme helpers
import { getCurrentThemeColor, getStyleVariable } from '../../theme/helpers';



export const SidebarSC = styled.div`
    background: ${getCurrentThemeColor('primary')};
    box-shadow: ${getStyleVariable('boxShadow', 'strongest')};
    height: 80vh;
    margin-top: 100px;
    width: 600px;
`;

export const TaskListHeaderSC = styled.div`
    box-shadow: ${getStyleVariable('boxShadow', 'lighter')};
    height: 180px;
    position: relative;
    z-index: 1;
`;

export const LogoContainerSC = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px 10px;
    & > img {
        height: 56px;
        width: 300px;
    }
`;
