import React, { Component } from "react";
import classnames from "classnames";

import Role from "./Role";
import Candidate from "./Candidate";

import "./style.css";

export default class Organization extends Component {
	constructor(props) {
		super(props);

		this.state = {
			year: null,
			organization: null,
			candidate: null
		};
	}

	componentDidUpdate() {
		let year = this.props.year;
		let organization = this.props.organization;
		if (year && organization &&
				(
					this.state.year !== year ||
					this.state.organization !== organization
				)
			) {
			// Select first candidate
			if (organization.roles) {
				let candidate = this.props.organization.roles[0]["candidates"][0];
				candidate.role = this.props.organization.roles[0]["title"];
				candidate.year = year;
				candidate.organization = this.props.organization.name;
				this.setState({
					year: year,
					organization: organization,
					candidate: candidate
				});
			}
		}
	}

	selectCandidate(candidate, role) {
		candidate.role = role;
		this.setState({
			candidate: candidate
		});
	}

	render() {
		if (this.props.organization == null || this.props.year == null) {
			return null;
		}
		let roles = this.props.organization.roles;

		const { className } = this.props;
		return (
			<div className={classnames("Organization", className)}>
				<div className="row">
					<div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
						<h2>{this.props.year} {this.props.organization.name} Candidates:</h2>
						<ul className="list">
							{
								roles.map((role) => (
									<Role key={role.title} selectedCandidate={this.state.candidate} role={role} selectCandidate={(candidate, role) => this.selectCandidate(candidate, role)}/>
								))
							}
						</ul>
						{this.props.ballot}
					</div>
					<div className="col-xs-12 col-sm-6 col-md-8 col-lg-8">
						<Candidate candidate={this.state.candidate} year={this.state.year} />
					</div>
				</div>
			</div>
		);
	}
}
