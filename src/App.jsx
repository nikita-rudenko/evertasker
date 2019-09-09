import React, { useContext } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

// Contexts
import { ThemeContext } from './contexts/ThemeContext';
// Helpers
import { composeCurrentTheme } from './theme/helper';
// Components
import TaskList from './containers/TaskList';
import ThemeToggler from './components/ThemeToggler';



function App() {
    const [currentTheme] = useContext(ThemeContext);

    return (
        <ThemeProvider theme={composeCurrentTheme(currentTheme)}>
            <AppContainerSC>
                <GlobalStyle />
                <ThemeToggler />
                <TaskList />
            </AppContainerSC>
        </ThemeProvider>
    );
}

const GlobalStyle = createGlobalStyle`
    html {
        font-size: 62.5%;
        font-family: 'Lato', sans-serif;
        box-sizing: border-box;
    }
    
    body {
        margin: 0;
        padding: 0;
        position: relative;
    }

    *,
    *:after,
    *:before {
        box-sizing: inherit;
    }
`;

const AppContainerSC = styled.div`
    background: ${({ theme }) => theme.themeColors.background};
    display: flex;
    justify-content: center;
    min-height: 100vh;
    transition: ${({ theme }) => theme.transitions.onToggleTheme};
    width: 100%;
`;

export default App;
