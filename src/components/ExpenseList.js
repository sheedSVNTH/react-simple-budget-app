import React from 'react';
import '../App.css';

function ExpenseList(props) {
        return (
            <div className="expense-list">
                {props.expenseList.map((expense) => {
                    return (
						<tr className="expenseItem">
							<td className="expense-desc">{expense.expItem}</td>
							<td className="expense-amount">{expense.expAmount}</td>
							<td><button className="xBtn" onClick={props.deleteExpenseItem}>X</button></td>
						</tr>
                    )
                })}
            </div>
        )
}
export default ExpenseList;
