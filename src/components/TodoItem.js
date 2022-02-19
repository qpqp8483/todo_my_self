import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components'
import { MdDone, MdDelete } from 'react-icons/md';

const Remove = styled.span`
  display: none;
  align-items: center;
  justify-content: center;
  font-size: 2.4rem;
  color: #dee2e6;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  left: 0;
  padding: 12px 0;
  &:hover {
    ${Remove} {
      display: flex;
      margin-left: auto;
    }
  }
  ${({ todoItemState }) =>
    todoItemState &&
    css`
      left: -75px;
      transition: all ease 0.55s;
      opacity: 0;
    `
  }
`;

const CheckCircle = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  width: 22px;
  height: 22px;
  font-size: 1.6rem;
  border: 1px solid #ced4da;
  border-radius: 16px;
  cursor: pointer;
  ${({ checked }) =>
    checked &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const Text = styled.p`
  position: relative;
  margin: 0;
  font-size: 1.6rem;
  color: #495057;
  transition: all ease 0.4s;
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: -3px;
    width: 0;
    height: 1px;
    background-color: #20c997;
    transition: all ease 0.4s;
    opacity: 0;
  }
  ${({ checked }) =>
    checked &&
    css`
      color: #ced4da;
      &::after {
        left: -3px;
        width: calc(100% + 6px);
        opacity: 1;
      }
    `}
`;


const TodoItem = ({ todo, onToggle, onRemove }) => {

  const { id, text, checked } = todo;

  //Remove의 상태관리를 위한 초기 설정
  const [todoItemState, setTodoItemState] = useState(false);

  //Remove를 클릭시 실행
  const removeDelay = () => {
    setTodoItemState(true);
    setTimeout(() => {
      onRemove(id);
    }, 400);
  } 

  return (
    <TodoItemBlock todoItemState={ todoItemState }>
      <CheckCircle checked={checked} onClick={() => onToggle(id)}>
        {checked && <MdDone />}
      </CheckCircle>
      <Text checked={checked}>{text}</Text>
      <Remove onClick={removeDelay}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
};


export default TodoItem;
