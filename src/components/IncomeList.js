import React from 'react';

import '../App.css';

function IncomeList (props) {
        return (
		<div className="income-list">
                {props.incomeList.map((income, index) => {
                    return (
						<tr className="incomeItem">
                <td className="income-desc">{income.item}</td>
			    <td className="income-amount">{income.amount}</td>
				<td className="income-category">{income.category}</td>
				<td><button className="xBtn" onClick={() => props.deleteIncomeItem(index)}>X</button></td>
            </tr>					
                    )
                })}
            </div>
        )
}
export default IncomeList;

/*

<div className="income-list">
                {props.incomeList.map((income, i) => {
                    return (
						<IncomeItem key={i} deleteINCitem={props.deleteIncomeItem(i)} description={income.item} amount={income.amount}/>
						
                    )
                })}
            </div>
			
			import IncomeItem from './IncomeItem';
			*/