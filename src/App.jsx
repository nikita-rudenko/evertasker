import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

// Theme
import { theme } from './theme';
// Components
import TaskList from './containers/TaskList';



function App() {
    return (
        <ThemeProvider theme={theme}>
            <AppContainerSC>
                <GlobalStyle />
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
	background: ${props => props.theme.colorWhite};
	display: flex;
	justify-content: center;
	min-height: 100vh;
	width: 100%;
`;

export default App;
