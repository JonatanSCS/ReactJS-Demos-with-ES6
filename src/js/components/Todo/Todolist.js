import React from "react"


export default class TodoList extends React.Component {
	createItem (item) {
		return(
			<li key={item.id}>{item.text}</li>
		);
	}
	render() {
			
		return (
			<ul>
				 {this.props.items.map(this.createItem)}
			</ul>
		);
	}
}