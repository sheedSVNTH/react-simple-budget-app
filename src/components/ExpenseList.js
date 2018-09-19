import React from 'react';
import ExpenseItem from './ExpenseItem';
import '../App.css';

function ExpenseList(props) {
        return (
            <div className="expense-list">
                {props.expenseList.map((expense, index) => {
                    return (
						<ExpenseItem key={index} description={expense.expItem} amount={expense.expAmount}/>
                    )
                })}
            </div>
        )
}
export default ExpenseList;
