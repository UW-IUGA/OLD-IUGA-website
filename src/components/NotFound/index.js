import React, { Component } from "react";
import classnames from "classnames";

import Layout from "../Layout";

import "./style.css";

export default class NotFound extends Component {
	render() {
		const { className, ...props } = this.props;
		return (
			<Layout {...props}>
				<div className={classnames("NotFound", className)}>
					<h1>404</h1>
					<p>Not Found :(</p>
				</div>
			</Layout>
		);
	}
}
