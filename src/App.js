import React, { Component } from 'react';
import IncomeList from './components/IncomeList';
import ExpenseList from './components/ExpenseList';
import AddItem from './components/AddItem';
import './App.css';

class App extends Component {
	constructor(){
		super()
		this.state = {
			incomeItems: [],
			expenseItems: [],
			totalIncome: 0,
			totalExpense: 0,
			color: 'black'
		}
		this.addBudgetItem = this.addBudgetItem.bind(this);	
		this.addExpenseItem = this.addExpenseItem.bind(this);
		this.deleteIncomeItem = this.deleteIncomeItem.bind(this);
	}
	
	addBudgetItem (item, amount) {
		let newIncomeTotal = this.state.totalIncome + parseInt(amount);
		this.setState({
			 incomeItems: [...this.state.incomeItems, {item: item, amount: amount}],
			totalIncome: newIncomeTotal

		})
	}
	addExpenseItem (expItem, expAmount) {
		let newExpenseTotal = this.state.totalExpense + parseInt(expAmount);
		this.setState({
			 expenseItems: [...this.state.expenseItems, {expItem: expItem, expAmount: expAmount}],
			totalExpense: newExpenseTotal
		})
	}
	
	deleteIncomeItem (id) {
		//this.setState(prevState => ({
    //    incomeItems: prevState.incomeItems.filter(el => el != id )
   // })); 
		alert("this works");
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
					<tr><ExpenseList expenseList={this.state.expenseItems} /></tr>
					<p className="expense-desc">Total Expense: {this.state.totalExpense} </p>
				</table>
		<h2 style={{color:this.state.color}}> TOTAL BALANCE: {this.state.totalIncome - this.state.totalExpense}</h2>
			</div>
		</div>
     </div>
    );
  }
}

export default App;
