import React from 'react';
import IncomeItem from './IncomeItem';
import '../App.css';

function IncomeList (props) {
        return (
		<div className="income-list">
                {props.incomeList.map((income, index) => {
                    return (
						<IncomeItem key={index} deleteINCitem={props.deleteIncomeItem} description={income.item} amount={income.amount}/>
						
                    )
                })}
            </div>
        )
}
export default IncomeList;
