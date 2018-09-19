import React from 'react';

import '../App.css';

function IncomeItem (props) {
	
        return (
            <tr className="incomeItem">
                <td className="income-desc">{props.description}</td>
			    <td className="income-amount">{props.amount}</td>
				<td><button className="xBtn" onClick={props.deleteINCitem}>X</button></td>
            </tr>
        )
    }

export default IncomeItem