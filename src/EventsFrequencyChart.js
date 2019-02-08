import React, { Component } from 'react';
import './App.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

class CustomTooltip extends Component {
	render() {
		const { payload } = this.props;
		console.log(payload)
		if (payload.length == 1) {
			// console.log(payload[0])
			return (
				<div>
					{payload[0].payload.message}
				</div>
			)
		} else {
			return null;
		}

	}
}

class EventFrequencyChart extends Component {
  	render () {
		return (
			<BarChart width={600} height={300} data={this.props.eventFrequency}
				margin={{top: 5, right: 30, left: 20, bottom: 5}}>
			<CartesianGrid strokeDasharray="3 3"/>
			<XAxis dataKey="index"/>
			<YAxis/>
			<Tooltip content={<CustomTooltip/>} />
			<Legend />
			<Bar dataKey="count" fill="#8884d8" />
			</BarChart>
		);
	}
}

export default EventFrequencyChart;