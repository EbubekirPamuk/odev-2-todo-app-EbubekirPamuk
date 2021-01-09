import React, { Component } from 'react';
import Title from './Heading';

export default class Header extends Component {
	render() {
		return (
			<>
				<header className="header">
					<Title />
					<form onSubmit={this.props.addItem}>
						<input
							className="new-todo"
							placeholder="Next mission?"
							name="todoitem"
							autoFocus
						/>
					</form>
				</header>
			</>
		);
	}
}

