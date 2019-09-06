import React, { useContext } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

// Contexts
import { ThemeContext } from './contexts/ThemeContext';
// Theme
import { theme, THEME_VARIANTS } from './theme';
// Components
import TaskList from './containers/TaskList';
import ThemeToggler from './components/ThemeToggler';



function App() {
    const [currentTheme] = useContext(ThemeContext);

    return (
        <ThemeProvider theme={theme}>
            <AppContainerSC variant={currentTheme === THEME_VARIANTS.LIGHT}>
                <GlobalStyle />
                <ThemeToggler />
                <TaskList />
            </AppContainerSC>
        </ThemeProvider>
    );
}

const GlobalStyle = createGlobalStyle`
  body {
      margin: 0;
      padding: 0;
      font-family: 'Lato', sans-serif; 
  }
`;

const AppContainerSC = styled.div`
    background: ${({ theme, variant }) =>
        variant ? theme.colors.colorWhite : theme.colors.grey.dark};
    display: flex;
    justify-content: center;
    min-height: 100vh;
    transition: ${({ theme }) => theme.transitions.bgOnToggleTheme};
    width: 100%;
`;

export default App;
