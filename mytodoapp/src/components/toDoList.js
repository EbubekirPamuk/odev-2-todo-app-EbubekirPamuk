import React, { Component } from 'react';

export default class toDoList extends Component {
	render() {
		return (
			<main>
				{this.props.toDoList.map((todos, z) => (
					<li key={z} className={todos.active ? 'null' : 'completed'}>
						<div className="view">
							<input
								className="toggle"
								type="checkbox"
								onClick={() => this.props.isActiveItem(todos.id)}
							/>
							<label>{todos.todo}</label>
							<button
								className="destroy"
								onClick={() => this.props.removeItem(todos.id)}
							></button>
						</div>
					</li>
				))}
			</main>
		);
	}
}
