import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem =(props) => {


  const clickHandler = () =>{
    
    const element = document.querySelector('.expense-item');
    if(element){
    element.parentNode.removeChild(element);
    }

}
  
  return (
    <Card id='title' className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Delete Expenses</button>
    </Card>
  );
}

export default ExpenseItem;