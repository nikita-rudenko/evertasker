import styled from 'styled-components';



export const ThemeTogglerSC = styled.div`
    position: absolute;
    cursor: pointer;
    top: 40px;
    right: 60px;
    width: 60px;
    padding: 10px;
    border-radius: 50%;
    user-select: none;
    transition: ${({ theme }) => theme.transitions.bgOnToggleTheme};
    background: ${({ theme }) => theme.themeColors.secondary};
    box-shadow: ${({ theme }) => theme.boxShadow.stronger};
`;

export const ToggleIconSC = styled.img`
    height: 40px;
`;
