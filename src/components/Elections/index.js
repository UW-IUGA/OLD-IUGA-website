import React, { Component } from 'react';
import classnames from 'classnames';
import axios from 'axios';

import Layout from '../Layout';
import { Link } from 'react-router'

import Organization from "./Organization";

import './style.css';

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
		axios.get('/assets/election/years.json')
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
			})
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
			axios.get(`/assets/election/${year}/roles.json`)
			.then(res => {
				var yearData = this.state.yearData;
				res.data.forEach((org) => {
					org.roles.forEach((role) => {
						this.shuffle(role.candidates);
					});
				})
				yearData[year] = res.data;
				this.setState({
					yearData: yearData
				});
			}).catch(() => {});
		}
	}

	shuffle(a) {
		for (let i = a.length; i; i--) {
			let j = Math.floor(Math.random() * i);
			[a[i - 1], a[j]] = [a[j], a[i - 1]];
		}
	}

	selectOrganization(organization) {
		this.setState({
			organization: organization
		});
	}

	render() {
		let year = this.state.year;
		let organizations = this.state.yearData[year];

		const { className, ...props } = this.props;
		return (
			<Layout {...props}>
				<div className={classnames('Elections', className)}>
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
											<a onClick={() => this.selectOrganization(organization)} className={this.state.organization === organization ? "active" : ""}>{organization.name}</a>
										</li>
									))
								}
							</ul>
						</div>
					</div>

					<Organization organization={this.state.organization} year={year}/>
				</div>
			</Layout>
		);
	}
}
