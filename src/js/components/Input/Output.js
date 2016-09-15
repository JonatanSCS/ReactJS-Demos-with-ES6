import React from "react";

export default class Output extends React.Component {
	render() {
		return (
			<div>
				<h4>Output</h4>
				<p>{this.props.value}</p>
			</div>
		);
	}
}