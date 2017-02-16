import React, { Component } from 'react';
import classnames from 'classnames';

import './style.css';

export default class Footer extends Component {
	render() {
		const { className } = this.props;
		return(
			<footer className={classnames('Footer', className)}>
			</footer>
		);
	}
}
