import React, { Component } from 'react';
import TodoList from './toDoList';

export default class Main extends Component {
	render() {
		return (
			<section className="main">
				<input className="toggle-all" type="checkbox"/>

				<ul className="todo-list">
					<TodoList toDoList={this.props.toDoList} removeItem={this.props.removeItem} isActiveItem={this.props.isActiveItem} />
				</ul>
			</section>
		);
	}
}

