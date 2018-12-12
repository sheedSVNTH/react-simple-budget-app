import React from 'react'
import '../App.css';

class AddItem extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			item:'',
			amount: ''
		}
		
		this.handleChangeItem = this.handleChangeItem.bind(this);
		this.handleChangeAmount = this.handleChangeAmount.bind(this);
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
	
	handleAddInc(e){
		e.preventDefault()
		this.props.addBudgetItem(this.state.item, this.state.amount);
		this.setState({
			amount: '',
			item: ''
		});
	}
	
	handleAddExp(e){
		e.preventDefault()
		this.props.addExpenseItem(this.state.item, this.state.amount);
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
			<button className="addBtn" onClick={this.handleAddInc}>+</button>
			<button className="addBtn" onClick={this.handleAddExp}>-</button>
            </form>
        )
    }
}

export default AddItem