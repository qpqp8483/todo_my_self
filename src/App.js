import React, { useRef, useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoCreate from './components/TodoCreate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

const GlobalStyle = createGlobalStyle`
  html,body{
    margin: 0;
    padding: 0;
    height: 100%;
    background: #e9ecef;
    font-size: 62.5%;
  }
  #root{
    min-height: 100%;
    max-height: 100%;
  }
`;

function App() {

  const initialTodos = [
    {
      id: 1,
      text: "아침밥 먹기!",
      checked: true,
    },
    {
      id: 2,
      text: "출근 하기",
      checked: true,
    },
    {
      id: 3,
      text: "퇴근하고 치킨 먹기",
      checked: false,
    },
  ];

  const [todos, setTodos] = useState(initialTodos);

  const nextId = useRef(4);

  const onInsert = (text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    setTodos(todos.concat(todo));
    nextId.current += 1;
  }

  const onToggle = id => {
    setTodos(
      todos.map(todo => 
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,  
      )
    )
  }

  const onRemove = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead todos={todos} />
        <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
        <TodoCreate onInsert={onInsert} />
      </TodoTemplate>
    </>
  );
}

export default App;
