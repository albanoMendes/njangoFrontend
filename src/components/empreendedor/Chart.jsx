import { useState } from 'react';
import { Bar } from 'react-chartjs-2';

function Chart(props) {

	const { primery, secudary, datasets, labels, titulo } = props;

	//const labels = data.map(emp=>emp.sub)
	//const dataVal = data.map(val=>val.sem)
	console.log(labels)
	console.log(datasets)
	const ChartData = {
		labels: labels,
		datasets : datasets,
		/*[
			{
				label: `${empresa}`,
				backgroundColor: `${cor}`,
				borderColor: 'rgba(0, 0, 0, 1)',
				borderWidth: 1,
				data : dataVal,
				
			}
		]*/
	}

	return(
		<div style={{width: '100%', height: '350px'}}>
			<Bar
				data={ChartData}
				options={{
					responsive: true,
					maintainAspectRatio: false,
					title: {
						display: true,
						text: `${titulo}`,
						fontSize: 20,
						fontFamily: 'Oswald, sans-serif',
			            fontColor: `${secudary}`,
					},
					scales : {
						yAxes: [{
							ticks: {
								beginAtZero : true,
								fontSize: 10,
								fontFamily: 'Oswald, sans-serif',
			            		fontColor: `${secudary}`,
							}
						}],
						xAxes: [{
							ticks: {
								//beginAtZero : true,
								fontSize: 10,
								fontFamily: 'Oswald, sans-serif',
			            		fontColor: `${secudary}`,
							}
						}],

					}
				}}
			>
				
			</Bar>
		</div>
	)
}

export default Chart;