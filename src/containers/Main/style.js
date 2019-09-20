import styled from 'styled-components';



export const MainSC = styled.div`
    position: relative;
    transition: width 0.4s ease-in;
    height: 80vh;
    margin-top: 100px;
    margin-left: 30px;
    padding: 0;
    width: ${({ isFullView }) => (isFullView ? '800px' : '0px')};
`;
