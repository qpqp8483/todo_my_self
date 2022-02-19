import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';

const CircleButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 50%;
    bottom: 0px;
    width: 80px;
    height: 80px;
    font-size: 6.0rem;
    color: #fff;
    background: #38d9a9;
    &:hover {
        background: #63e6be;
    }
    &:active {
        background: #20c997;
    }
    border: none;
    border-radius: 50%;
    outline: none;
    z-index: 5;
    cursor: pointer;
    transform: translate(-50%, 50%);
    transition: all ease-in 0.125s;
    ${props =>
        props.open &&
        css`
            background: #ff6b6b;
            &:hover{
                background: #ff8787;
            }
            &:active{
                background: #fa5252;
            }
            transform: translate(-50%, 50%) rotate(45deg);

        `
    }
`;

const InsertFormPositioner = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
`;

const InsertForm = styled.form`
  background: #f8f9fa;
  padding: 30px 30px 65px;
  border-top: 1px solid #e9ecef;
  border-radius: 0 0 16px 16px;
`;

const Input = styled.input`
  padding: 8px 12px;
  width: 100%;
  font-size: 1.4rem;
  border: 1px solid #dee2e6;
  border-radius: 4px;
  outline: none;
  box-sizing: border-box;
`;

const TodoCreate = ({ onInsert }) => {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');

    const onToggle = () => setOpen(!open);

    const onChange = e => {
        setValue(e.target.value);
        console.log(value);
    }

    const onSubmit = e => {
      if(value === ''){
        alert('달성할 리스트를 적어주세요!');
      }else{
        onInsert(value);
        setValue('');
      }
      e.preventDefault();
    }

    return (
      <>
        {open && (
          <InsertFormPositioner open={open}>
            <InsertForm onSubmit={onSubmit}>
              <Input
                onChange={onChange}
                autoFocus
                value={value}
                placeholder="할 일을 입력해 주세요."
              />
            </InsertForm>
          </InsertFormPositioner>
        )}
        <CircleButton onClick={onToggle} open={open}>
          <MdAdd />
        </CircleButton>
      </>
    );
};

export default TodoCreate;