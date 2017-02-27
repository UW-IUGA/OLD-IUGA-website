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
			organization: null,
			ballot: null,
			currentTime: Date.now()
		};

		setInterval(() => {
			this.setState({
				currentTime: Date.now()
			});
		}, 1000);
	}

	componentDidMount() {
		axios.get("/assets/election/years.json")
		.then(res => {
			let years = res.data;
			let year = this.props.params.year;
			if (!year) {
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
			let organizations = this.state.yearData[year];
			if (organizations) {
				let organization = organizations[0];
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
				let orgs = res.data.orginizations;
				this.shuffle(orgs);
				orgs.forEach((org) => {
					org.roles.forEach((role) => {
						this.shuffle(role.candidates);
						role.candidates.sort(this.sortElected);
					});
				});
				yearData[year] = orgs;
				this.setState({
					yearData: yearData,
					ballot: res.data.ballot
				});
			}).catch(() => {});
		}
	}

	dateCheck(ballot) {
		var fDate = Date.parse(ballot.open);
		var lDate = Date.parse(ballot.close);
		var cDate = Date.now();

		if((cDate <= lDate && cDate >= fDate)) {
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
		if (a.elected) {
			return -1;
		} else if (b.elected) {
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
		let organizations = this.state.yearData[year];

		let ballot;
		if (this.state.ballot != null && this.dateCheck(this.state.ballot)) {
			let close = new Date(this.state.ballot.close);
			let left = close - this.state.currentTime;
			window.close = close;
			window.left = left;
			let hours = 60 * 60 * 1000;
			let minutes = 60 * 1000;
			let seconds = 1000;
			let timeLeft = `${this.pad(Math.floor(left/hours), 2)}:${this.pad(Math.floor((left % hours) / minutes), 2)}:${this.pad(Math.floor((left % minutes) / seconds), 2)}`;
			ballot = (
				<div>
					<p>
						<a className="btn btn-default ballot"
							href={this.state.ballot.url}
							target="_blank"
							style={{backgroundColor: this.state.ballot.color}}>
							Fill out Ballot
						</a>
					</p>
					<p>Ballot closes on {close.toDateString()} at {close.toLocaleTimeString()}</p>
					{
						left < (12 * 60 * 60 * 1000) &&
						(<p>Time Left to Vote: {timeLeft}</p>)
					}
				</div>
			);
		}

		return (
			<div className={classnames("Elections", this.props.className)}>
				<div className="row">
					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<h1>IUGA / Winfo Elections</h1>
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

				<Organization organization={this.state.organization} year={year} ballot={ballot}/>
			</div>
		);
	}
}
