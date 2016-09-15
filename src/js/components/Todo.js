import React from "react"

import TodoList from "./Todo/Todolist"

export default class TodoApp extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
      text: '',
      key: 0
    }
  }

  onChange(e) {
    this.setState({text: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    let nextItems = this.state.items.concat([{text: this.state.text, id: Date.now()}]);
    let nextText = '';
    this.setState({items: nextItems, text: nextText});
  }

  render() {
    return(
      <div>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input onChange={this.onChange.bind(this)} value={this.state.text} />
          <button>{'Add #' + (this.state.items.length +1)}</button>
        </form>
      </div>
    );
  }
}