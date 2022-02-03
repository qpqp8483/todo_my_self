import React from 'react';
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
  padding: 12px 0;
  &:hover {
    ${Remove} {
      display: flex;
    }
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
  flex: 1;
  margin: 0;
  font-size: 1.6rem;
  color: #495057;
  ${({ checked }) =>
    checked &&
    css`
      color: #ced4da;
    `}
`;


const TodoItem = ({ todo }) => {

    const {id, text, checked} = todo;

    return (
      <TodoItemBlock>
        <CheckCircle checked={checked}>{checked && <MdDone />}</CheckCircle>
        <Text checked={checked}>{text}</Text>
        <Remove>
          <MdDelete />
        </Remove>
      </TodoItemBlock>
    );
};


export default TodoItem;
