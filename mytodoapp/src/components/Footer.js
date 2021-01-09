import React, { Component } from 'react';

export default class Footer extends Component {
	render() {
		return (
			<footer className="footer">
				<span className="todo-count">
					<strong>{this.props.todoLength} </strong>
					items left
				</span>

				<ul className="filters">
					<li>
						<a onClick={this.props.filterAll}>All</a>
					</li>
					<li>
						<a onClick={this.props.filterActive}>Active</a>
					</li>
					<li>
						<a onClick={this.props.filterCompleted}>Completed</a>
					</li>
				</ul>

				<button className="clear-completed" onClick={this.props.clearItems}>
					Clear completed
				</button>
			</footer>
		);
	}
}

