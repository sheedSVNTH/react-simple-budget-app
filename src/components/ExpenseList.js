import React from 'react';
import '../App.css';

function ExpenseList(props) {
        return (
            <div className="expense-list">
                {props.expenseList.map((expense, index) => {
                    return (
						<tr className="expenseItem" key={expense}>
							<td className="expense-desc">{expense.expItem}</td>
							<td className="expense-amount">{expense.expAmount}</td>
							<td className="expense-category">{expense.expCategory}</td>
							<td><button className="xBtn" onClick={() => props.deleteExpenseItem(index)}>X</button></td>
						</tr>
                    )
                })}
            </div>
        )
}
export default ExpenseList;
