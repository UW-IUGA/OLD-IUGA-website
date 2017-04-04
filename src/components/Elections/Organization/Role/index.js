import React, { Component } from "react";
import classnames from "classnames";

import "./style.css";

export default class Role extends Component {
	render() {
		if (this.props.role === null) {
			return null;
		}

		const { className } = this.props;
		return (
			<li className={classnames("Role", className)}>{this.props.role.title}
				<ul>
					{
						this.props.role.candidates.map((candidate) => (
							<li key={candidate.name} className="name">
								<a
									onClick={() => this.props.selectCandidate(candidate, this.props.role.title)}
									className={(this.props.selectedCandidate === candidate ? " active" : "")}
								>{candidate.name}{candidate.outcome != null ? ((<small className="Elected"> - {candidate.outcome}</small>)) : ""}</a></li>
						))
					}
				</ul>
			</li>
		);
	}
}
