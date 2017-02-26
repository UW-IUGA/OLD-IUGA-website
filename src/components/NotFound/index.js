import React, { Component } from "react";
import classnames from "classnames";

import "./style.css";

export default class NotFound extends Component {
	render() {
		return (
			<div className={classnames("NotFound", this.props.className)}>
				<h1>404</h1>
				<p>Not Found :(</p>
			</div>
		);
	}
}
