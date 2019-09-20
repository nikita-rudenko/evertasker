import styled from 'styled-components';

// Theme helpers
import { getStyleVariable } from '../../theme/helpers';



export const TaskSC = styled.div`
    background: ${getStyleVariable('constColors', 'taskColor1')};
    box-shadow: ${getStyleVariable('boxShadow', 'lighter')};
    border-radius: 4px;
    border-width: ${({ isOpened }) => (isOpened ? '2px' : '0px')};
    border-style: solid;
    border-color: ${getStyleVariable('constColors', 'accent')};
    height: 140px;
    margin: 20px 0;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    width: 100%;
    display: flex;
    padding: ${({ isOpened }) => (isOpened ? '2px' : '0px')};
    flex-direction: column;
    position: relative;
    color: #4a4a4a;

    &:hover {
        box-shadow: ${getStyleVariable('boxShadow', 'normal')};
        cursor: pointer;
    }
`;

export const TitleSC = styled.h3`
    font-size: 18px;
    font-size: 400;
    letter-spacing: 1px;
    margin-left: 16px;
    margin-top: 0;
`;

export const TagsSC = styled.div`
    padding: 1px 14px;
`;

export const StatusSC = styled.div`
    position: absolute;
    top: 14px;
    right: 14px;
`;

export const TaskInfoSC = styled.div`
    margin-top: auto;
    display: flex;
    align-items: center;
    font-size: 12px;
    margin-bottom: 10px;
    margin-left: 14px;
`;

export const TaskInfoItemSC = styled.span`
    margin-right: 4px;
    display: flex;
    align-items: center;
`;

export const TaskInfoItemRightSC = styled.span`
    margin-left: auto;
    display: flex;
    align-items: center;
    margin-right: 14px;
`;

export const IconSC = styled.img`
    height: 14px;
    margin: 0 4px;
`;
