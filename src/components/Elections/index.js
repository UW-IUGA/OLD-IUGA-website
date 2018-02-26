import React, { Component } from "react";
import classnames from "classnames";
import axios from "axios";

import { Link } from "react-router";

import Organization from "./Organization";

import "./style.css";

export default class Elections extends Component {
	constructor(props) {
		super(props);

		this.state = {
			years: [],
			yearData: {},
			year: null,
			organization: null
		};
	}

	componentDidMount() {
		axios.get("/assets/election/years.json")
		.then(res => {
			let years = res.data;
			let year = this.props.params.year;
			if (!year) {
				console.log("year not set");
				year = years[years.length - 1];
				this.props.router.replace(`/elections/${year}`);
			}
			this.setState({
				years: years,
				year: year
			});
		});
	}

	componentDidUpdate() {
		let year = this.props.params.year;
		if (year && (!this.state.organization || this.state.year !== year)) {
			// Select first organization
			let data = this.state.yearData[year];
			if (data) {
				let organization = data.organizations[0];
				this.setState({
					organization: organization,
					year: year
				});
			}
		}
		if (!year) {
			this.props.router.replace(`/elections/${this.state.years[this.state.years.length - 1]}`);
		}
		if (year && !this.state.yearData[year]) {
			axios.get(`/assets/election/${year}/data.json`)
			.then(res => {
				let yearData = this.state.yearData;
				let organizations = res.data.organizations;
				this.shuffle(organizations);
				organizations.forEach((org) => {
					org.roles.forEach((role) => {
						this.shuffle(role.candidates);
						role.candidates.sort(this.sortElected);
					});
				});
				yearData[year] = {
					organizations: organizations,
					ballot: res.data.ballot
				};
				this.setState({
					yearData: yearData
				});
			}).catch(() => {});
		}
	}

	dateCheck(ballot) {
		let open = ballot.open.split(/[- :]/);
		let close = ballot.close.split(/[- :]/);

		let openDate = new Date(open[0], open[1]-1, open[2], open[3], open[4], open[5]);
		let closeDate = new Date(close[0], close[1]-1, close[2], close[3], close[4], close[5]);
		let now = Date.now();

		if(now <= closeDate && now >= openDate) {
			return true;
		}
		return false;
	}

	shuffle(a) {
		for (let i = a.length; i; i--) {
			let j = Math.floor(Math.random() * i);
			[a[i - 1], a[j]] = [a[j], a[i - 1]];
		}
	}

	sortElected(a, b) {
		if (a.outcome != null) {
			return -1;
		} else if (b.outcome != null) {
			return 1;
		} else {
			return 0;
		}
	}

	selectOrganization(organization) {
		this.setState({
			organization: organization
		});
	}

	checkOrganizationMatch(a, b) {
		return (
			a != null &&
			b != null &&
			(a.name === b.name)
		);
	}

	pad(n, width, z) {
		z = z || "0";
		n = n + "";
		return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
	}

	render() {
		let year = this.state.year;
		let data = this.state.yearData[year];
		if (data == null) {
			return null;
		}

		let organizations = data.organizations;
		let ballot = data.ballot;

		let renderedBallot;
		if (ballot != null && this.dateCheck(ballot)) {
			renderedBallot = (
				<div>
					<p>
						<a className="btn btn-default ballot"
							href={ballot.url}
							target="_blank"
							style={{backgroundColor: ballot.color}}>
							Fill out Ballot
						</a>
					</p>
					<p>Polls close <strong className="closes">{ballot.date}</strong> at <strong className="closes">{ballot.time}</strong></p>
				</div>
			);
		}

		return (
			<div className={classnames("Elections", this.props.className)}>
				<div className="row">
					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<h1>IUGA / WINFO Elections</h1>
					</div>
				</div>

				<div className="row">
					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<ul className="years menu-list">
							{
								this.state.years.map((year) => (
									<li key={year} className="year menu-list-item">
										<Link to={"/elections/" + year} activeClassName="active">{year}</Link>
									</li>
								))
							}
						</ul>

						<ul className="organizations menu-list">
							{ organizations &&
								organizations.map((organization) => (
									<li key={organization.name} className="organization menu-list-item">
										<a onClick={() => this.selectOrganization(organization)}
											className={this.checkOrganizationMatch(this.state.organization, organization) ? "active" : ""}>{organization.name}</a>
									</li>
								))
							}
						</ul>
					</div>
				</div>

				<Organization organization={this.state.organization} year={year} ballot={renderedBallot}/>
			</div>
		);
	}
}
