import React, { Component } from 'react';
import IncomeList from './components/IncomeList';
import ExpenseList from './components/ExpenseList';
import AddItem from './components/AddItem';
import Chart from './components/Chart';
import './App.css';

class App extends Component {
	constructor(){
		super()
		this.state = {
			incomeItems: [],
			expenseItems: [],
			totalIncome: 0,
			totalExpense: 0,
			color: 'black',
			counter: 0
		}
		this.addBudgetItem = this.addBudgetItem.bind(this);	
		this.addExpenseItem = this.addExpenseItem.bind(this);
		this.deleteIncomeItem = this.deleteIncomeItem.bind(this);
		this.deleteExpenseItem = this.deleteExpenseItem.bind(this);
	}
	
	addBudgetItem (item, amount, category) {
		let newIncomeTotal = this.state.totalIncome + parseInt(amount);
		this.setState({
			incomeItems: [...this.state.incomeItems, {item: item, amount: amount, category: category}],
			totalIncome: newIncomeTotal
		})
	}

	addExpenseItem (expItem, expAmount, expCategory) {
		let newExpenseTotal = this.state.totalExpense + parseInt(expAmount);

		this.setState({
			 expenseItems: [...this.state.expenseItems, {expItem: expItem, expAmount: expAmount, expCategory: expCategory}],
			totalExpense: newExpenseTotal
		})
	}
	
	deleteIncomeItem (index) {
		const newIncList = this.state.incomeItems;
        const slicedIncome = newIncList.slice(0, index).concat(newIncList.slice(index + 1));
		this.setState({incomeItems: slicedIncome}); 
				
		let total = 0;
		slicedIncome.map((inc) => {total += parseInt(inc.amount)});
		this.setState({totalIncome: total});
	}   
	
	deleteExpenseItem (index) {
		const newExpList = this.state.expenseItems;
		const slicedExp = newExpList.slice(0, index).concat(newExpList.slice(index + 1));
		this.setState({expenseItems: slicedExp}); 
		
		let total = 0;
		slicedExp.map((exp) => {total += parseInt(exp.expAmount)});
		this.setState({totalExpense: total});
	}
	
  render() {
	  
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Monthly Budget</h1>
        </header>
		
		<div className="container">
			<AddItem addBudgetItem={this.addBudgetItem} addExpenseItem={this.addExpenseItem}/>
			<div className="line"></div>
			<div className="UIdiv">	
				<table>
					<h1>INCOME ITEMS</h1>
					<tr><IncomeList incomeList={this.state.incomeItems} deleteIncomeItem={this.deleteIncomeItem}/></tr>
					<p className="income-desc">Total Income: {this.state.totalIncome}</p>
				</table>
				<table>
					<h1>EXPENSE ITEMS</h1>
					<tr><ExpenseList expenseList={this.state.expenseItems} deleteExpenseItem={this.deleteExpenseItem}/></tr>
					<p className="expense-desc">Total Expense: {this.state.totalExpense} </p>
				</table>

		<h2 style={(this.state.totalIncome - this.state.totalExpense === 0) ? {color: 'black'}: (this.state.totalIncome > this.state.totalExpense) ? {color:'green'}:{color:'red'}}> TOTAL BALANCE: {this.state.totalIncome - this.state.totalExpense}</h2>
			</div>
		</div>
		<div>
		<Chart />
		</div>
     </div>
    );
  }
}

export default App;



//
//		const newIncList = this.state.incomeItems;
//		newIncList.splice(incomeIndex, 1);