import React from 'react'
import '../App.css';

class AddItem extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			item:'',
			amount: '',
			category: 'Select Category'
		}
		this.handleChangeItem = this.handleChangeItem.bind(this);
		this.handleChangeAmount = this.handleChangeAmount.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleAddInc = this.handleAddInc.bind(this);
		this.handleAddExp = this.handleAddExp.bind(this);
	}
	
	handleChangeItem(e){
		this.setState({
			item: e.target.value
		});
	}
	
	handleChangeAmount(e){
		this.setState({
			amount: e.target.value
		});
	}
	
	handleSubmit(e){
		this.setState({
			category: e.target.value
		});
	}
	
	handleAddInc(e){
		e.preventDefault()
		this.props.addBudgetItem(this.state.item, this.state.amount, this.state.category);
		this.setState({
			amount: '',
			item: ''
		});
	}
	
	handleAddExp(e){
		e.preventDefault()
		this.props.addExpenseItem(this.state.item, this.state.amount, this.state.category);
		this.setState({
			amount: '',
			item: ''
		});
	}
	
    render() {
        return (
            <form className="add-item-form">
			<input
					className="inputDesc"
					onChange={this.handleChangeItem}		
					value={this.state.item}
                    placeholder="Description"
                    type="text" 
			/>
			 <input
					className="inputAmt"
					onChange={this.handleChangeAmount}
					value={this.state.amount}
                    placeholder="Value"
                    type="text" 
			/>
			
      <form>
          <select onChange={this.handleSubmit}>
			<option value="" disabled selected>Please Choose...</option>
			<option value="earned">INC: Earned</option>
			<option value="invest">INC: Investment</option>
			<option value="sales">INC: Sales</option>
			<option value="re">INC: Real Estate</option>
			<option value="services">INC: Services</option>
			<option value="other">INC: Other</option>
			<option value="expRe">EXP: Real Estate</option>
			<option value="utility">EXP: Utility</option>
			<option value="auto">EXP: Auto</option>
			<option value="medical">EXP: Medical</option>
			<option value="food">EXP: Food</option>
			<option value="supply">EXP: Supplies</option>
			<option value="recreation">EXP: Recreation</option>
			<option value="other">EXP: Other</option>
          </select>
      </form>
			
			<button className="addBtn" onClick={this.handleAddInc}>+</button>
			<button className="addBtn" onClick={this.handleAddExp}>-</button>
            </form>
        )
    }
}

export default AddItem

			//<option value="" disabled selected>EXPENSES</option>