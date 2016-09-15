import React from "react";

import Simple from "./components/Simple";
import Timer from "./components/Timer";
import Todo from "./components/Todo"; 
import Input from "./components/Input";

export default class Layout extends React.Component {
	render() {
		return (
			<div>
				<h2>Simple Component</h2>
				<Simple />
				<h2>Timer Component</h2>
				<Timer />
				<h2>Todo Component</h2>
				<Todo />
				<h2>Input Component</h2>
				<Input />
			</div>
		);
	}
}

