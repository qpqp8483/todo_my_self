import React from 'react';
import '../style/TodoList.scss'
import TodoItem from './TodoItem';

const TodoList = ({ todos }) => {
    return (
      <div className="todo-list">
          {todos.map(todo => (
              <TodoItem 
                todo={todo}
                key={todo.id}
              />
          ))}
      </div>
    );
};

export default TodoList;