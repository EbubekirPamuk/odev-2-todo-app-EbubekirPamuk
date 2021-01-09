import React, { Component, memo } from 'react';

export class Heading extends Component {

	render() {
		return (
			<div>
				<h1>toDos</h1>
			</div>
		);
	}
}

export default memo(Heading);