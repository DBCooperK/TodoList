import React from 'react';
import TodoList from './components/TodoList';
import GlobalStyle from './utils/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoList />
    </>
  );
}

export default App;