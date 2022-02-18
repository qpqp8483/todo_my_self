import React, { useEffect, useRef, useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoCreate from './components/TodoCreate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

const GlobalStyle = createGlobalStyle`
  html,body{
    background: #e9ecef;
    font-size: 62.5%;
  }
`;

function App() {

  const initialTodos = [
    {
      id: 1,
      text: "리액트의 기초 알아보기",
      checked: true,
    },
    {
      id: 2,
      text: "컴포넌트 스타일링해 보기",
      checked: true,
    },
    {
      id: 3,
      text: "일정 관리 앱 만들어 보기",
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
