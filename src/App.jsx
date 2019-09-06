import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

// Theme
import { theme } from './theme';
// Components
import TaskList from './containers/TaskList';



function App() {
    return (
        <AppContainer>
            <GlobalStyle />
            <TaskList />
        </AppContainer>
    );
}

const GlobalStyle = createGlobalStyle`
  body {
      margin: 0;
      padding: 0;
      font-family: 'Lato', sans-serif;
  }
`;

const AppContainer = styled.div`
	background: ${theme.colors.grey.light};
	display: flex;
	justify-content: center;
	min-height: 100vh;
	width: 100%;
`;

export default App;
