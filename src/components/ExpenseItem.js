import React from 'react';

import '../App.css';

function ExpenseItem (props) {
        return (
			<tr className="expenseItem">
                <td className="expense-desc">{props.description}</td>
			    <td className="expense-amount">{props.amount}</td>
				<td><button className="xBtn">X</button></td>
            </tr>
        )
    }

export default ExpenseItem