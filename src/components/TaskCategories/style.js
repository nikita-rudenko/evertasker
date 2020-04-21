import styled from 'styled-components';

// Theme helpers
import { getStyleVariable } from '../../theme/helpers';



export const TaskCategoriesSC = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 20px 30px;
`;

export const TaskCategorySC = styled.div`
    background: ${({ color }) => color};
    border: ${({ isSelected }) => (isSelected ? '2px solid white' : '')};
    border-radius: 4px;
    box-shadow: ${getStyleVariable('boxShadow', 'lighter')};
    color: #fff;
    font-size: 1.4rem;
    margin: ${({ isSelected }) => (isSelected ? '-2px' : '')};
    padding: 8px 20px;
    text-transform: capitalize;

    &:hover {
        box-shadow: ${getStyleVariable('boxShadow', 'normal')};
        cursor: pointer;
    }
`;
