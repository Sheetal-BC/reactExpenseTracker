import React, { useState } from 'react';
import ExpenseFilter from './ExpenseFilter';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
const filterChangeHandler = (SelectedYear) =>{
  
  setFilteredYear(SelectedYear);
}

  return (
    <div>
       
    
    <Card className="expenses">
    <ExpenseFilter selected ={filteredYear} onChangeFilter={filterChangeHandler}/>
     {props.items.map((expense) =>( 
     <ExpenseItem 
     key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        />
        ))}
      
    </Card>
    </div>
  );
}

export default Expenses;