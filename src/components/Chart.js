import React from 'react'
import {Doughnut} from 'react-chartjs-2';


class Chart extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			chartData: {
				labels: ['Item1', 'Item2', 'Item3', 'Item4', 'Item5'],
				datasets: [
					{
					label: 'Quantity',
					data: [15, 20, 10, 5, 50],
					backgroundColor: [
						'rgba(54,162, 235, 0.6)',
						'rgba(30,175, 235, 0.6)',
						'rgba(75,105, 140, 0.6)',
						'rgba(50,200, 235, 0.6)',
						'rgba(40,162, 235, 0.6)'
						
					]
					}
				]
			}
		}
	}
	render() {
		return(
		<div className="chart">
		<Doughnut
			data={this.state.chartData}
			options={{maintainAspectRatio: false}}
			/>
			</div>
			)
		
	}
}
			

export default Chart