import React from 'react';
import '../style/TodoList.scss'
import TodoItem from './TodoItem';

const TodoList = ({ todos, onToggle, onRemove }) => {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
};

export default TodoList;