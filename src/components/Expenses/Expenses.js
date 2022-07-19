import React from 'react';

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css'


const Expenses = (props) =>{
return(
    <Card className="expenses">
    {props.items.map((element,i) => (<ExpenseItem
        title = {props.items[i].title}
        amount = {props.items[i].amount}
        date = {props.items[i].date}
        locationOfExpenditure = {props.items[i].locationOfExpenditure}
        /> ))}
     </Card>
)
}
export default Expenses;