import React, { useRef, useState } from 'react';
import styled, { css } from 'styled-components';

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
    border: none;
    border-radius: 5px;
    outline: none;
    z-index: 0;
    cursor: pointer;
    transform: translateX(-50%);
    transition: all ease 0.3s;
    &:hover {
        background: #2a6866;
    }
    ${({open}) => 
      open &&
      css`
        bottom: -50px;
        visibility: hidden;
      `
    }
`;

const AddTitle = styled.strong`
  display: block;
  margin-bottom: 15px;
  font-size: 2.2rem;
  font-weight: 500;
  color: #fff;
`;

const InsertFormPositioner = styled.div`
  visibility: hidden;
  position: absolute;
  left: 0;
  bottom: -240px;
  padding: 16px;
  width: 100%;
  height: 240px;
  background: #307672;
  box-sizing: border-box;
  border-radius: 10px 10px 0 0;
  z-index: 1;
  transition: all ease 0.4s;
  ${({open}) => 
    open &&
    css`
      visibility: visible;
      bottom: 0px;
    `
  }
`;

const Input = styled.input`
  margin-bottom: 30px;
  padding: 8px 12px;
  width: 100%;
  height: 44px;
  font-size: 1.4rem;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  outline: none;
  box-sizing: border-box;
`;

const BtnBox = styled.div`
  position: absolute;
  left: 16px;
  right: 16px;
  bottom: 16px;
  display: flex;
  justify-content: space-between;
    button {
      display: block;
      width: 47%;
      max-width: 230px;
      line-height: 50px;
      font-size: 1.8rem;
      text-align: center;
      border-radius: 5px;
      box-shadow: 0 0 8px 1px rgba(0,0,0,0.1);
    }
`;

const CancelBtn = styled.button`
  color: #fff;
  background: #307672;
  border: 1px solid #fff;
`;

const AddBtn = styled.button`
  color: #307672;
  background: #fff;
  border: 1px solid #fff;
`;

const TodoCreate = ({ onInsert }) => {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');
    const inputRef = useRef();

    const onToggle = (e) => {
      e.preventDefault();
      setOpen(!open);
      setValue('');
    }

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
      inputRef.current.focus();
      e.preventDefault();
    }

    return (
      <>
        <InsertFormPositioner open={open}>
          <AddTitle>Add Todo</AddTitle>
          <form onSubmit={onSubmit}>
            <Input
              onChange={onChange}
              autoFocus
              value={value}
              placeholder="Do homework"
              ref={inputRef}
            />
          </form>
          <BtnBox>
            <CancelBtn onClick={onToggle}>Back</CancelBtn>
            <AddBtn onClick={onSubmit}>Add</AddBtn>
          </BtnBox>
        </InsertFormPositioner>
        <CircleButton onClick={onToggle} open={open}>
          Add Todo
        </CircleButton>
      </>
    );
};

export default TodoCreate;