import React, { Component } from 'react';
import './App.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

class StatusChart extends Component {
  	render () {
		return (
			<BarChart width={600} height={300} data={this.props.statusData}
				margin={{top: 5, right: 30, left: 20, bottom: 5}}>
			<CartesianGrid strokeDasharray="3 3"/>
			<XAxis dataKey="name"/>
			<YAxis/>
			<Tooltip/>
			<Legend />
			<Bar dataKey="running" stackId="a" fill="#8884d8" />
       		<Bar dataKey="paused" stackId="a" fill="#82ca9d" />
       		<Bar dataKey="manual" stackId="a" fill="#000FFF" />
       		<Bar dataKey="idling" stackId="a" fill="#FFF000" />
       		<Bar dataKey="estopped" stackId="a" fill="#00FF00" />
			</BarChart>
		);
	}
}

export default StatusChart;