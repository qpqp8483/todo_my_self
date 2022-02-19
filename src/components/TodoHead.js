import React, { useEffect } from 'react';
import '../style/TodoHead.scss';

const TodoHead = ({ todos }) => {
    
    // 오늘 날짜 계산
    let nowDate = new Date();
    let year = nowDate.getFullYear();
    let todayMonth = nowDate.getMonth() + 1;
    let todayDate = nowDate.getDate();
    const todayNow = year + "년 " + todayMonth + "월 " + todayDate + '일';

    // 오늘 요일 계산
    const week = ['일', '월', '화', '수', '목', '금', '토'];
    let datOfWeek = week[nowDate.getDay()];

    const todoRemain = todos.filter( todo => todo.checked !== true );

  return (
    <div className="todo-head">
      <h1>{todayNow}</h1>
      <div className="day">{datOfWeek}요일</div>
      <div className="tasks-left">할 일 {todoRemain.length}개 남았다!</div>
    </div>
  );
};

export default TodoHead;