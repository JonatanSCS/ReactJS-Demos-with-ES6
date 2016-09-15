import React from "react"

export default class Timer extends React.Component {
	constructor() {
		super();
		this.state = {seconds: 0}
	}

	plus() {
		this.setState({seconds: this.state.seconds + 1});
	}

	componentDidMount() {
		this.interval = setInterval(this.plus.bind(this), 1000);
	}
	componentWillMount() {
		clearInterval(this.interval);
	}

	render() {
		return (
			<p>Seconds: {this.state.seconds}</p>
		);
	}
}
