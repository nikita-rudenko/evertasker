import styled from 'styled-components';

// Theme helpers
import { getCurrentThemeColor } from '../../theme/helpers';



export const DetailsViewSC = styled.div`
    height: 100%;
    width: 100%;
    background: ${getCurrentThemeColor('tertiary')}
`;
