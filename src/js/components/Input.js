import React from "react";

import Output from "./Input/Output"

export default class Input extends React.Component {
	constructor() {
		super();
		this.state = {
			value: "Type something"
		}
	}
	handleChange() {
		this.setState({
			value: this.refs.textarea.value
		});
	} 
	render() {
		return (
			<div>
				<h4>Input</h4>
				<textarea
					onChange={this.handleChange.bind(this)}
					ref="textarea"
					defaultValue={this.state.value}
				></textarea>
				<Output value={this.state.value}/>
			</div>
		);
	}
}