import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) =>   {
  const [title, setTitle] = useState(props.title); // hook - deben ser llamados en funciones de componente

    const clickHandler = () => {
      setTitle('Updated!');
    }
   
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div  className="expense-item__description">
        <h2>{title}</h2>
      <div  className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
