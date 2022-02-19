import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';

const CircleButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 50%;
    bottom: 15px;
    width: calc(100% - 30px);
    line-height: 45px;
    font-size: 1.8rem;
    color: #fff;
    background: #307672;
    box-shadow: 0 3px 6px 0 #307672;
    &:hover {
        background: #2a6866;
    }
    border: none;
    border-radius: 5px;
    outline: none;
    z-index: 0;
    cursor: pointer;
    transform: translateX(-50%);
    transition: all ease-in 0.125s;
    ${props =>
        props.open &&
        css`
            
        `
    }
`;

const InsertFormPositioner = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 1;
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
          Add Todo
        </CircleButton>
      </>
    );
};

export default TodoCreate;