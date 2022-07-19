import ExpenseDetail from './ExpenseDetail';
import ExpenseDate from './ExpenseDate';

import './ExpenseItem.css';

function ExpenseItem(props) {
    // const expenseDate = new Date(2021, 2, 28);
    // const expenseTitle ='Car Insurance';
    // const expenseAmount = 294.67;
    // const locationOfExpenditure = 'India';
   

  return (
    <div className="expense-item">
      <ExpenseDate date = {props.date}/>
      <ExpenseDetail amount = {props.amount} 
                     title = {props.title}
      />
      
      
      
    </div>
 

 
);
}

export default ExpenseItem;
