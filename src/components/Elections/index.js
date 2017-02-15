import React, { Component } from 'react';
import classnames from 'classnames';
import axios from 'axios';

import Layout from '../Layout';
import { Link } from 'react-router'

import './style.css';

export default class Elections extends Component {
	constructor(props) {
		super(props);

		this.state = {
			years: [],
			yearData: {},
			candidate: null
		};
	}

	componentDidMount() {
		axios.get('/assets/election/years.json')
		.then(res => {
			let years = res.data;
			if (!this.props.params.year) {
				this.props.router.replace(`/elections/${years[years.length - 1]}`);
			}
			this.setState({
				years: years
			})
		});
	}

	componentDidUpdate() {
		let year = this.props.params.year;
		if (year && (!this.state.candidate || this.state.candidate.year !== year)) {
			// Select first candidate
			if (this.state.yearData[year]) {
				let candidate = this.state.yearData[year][0]["candidates"][0]
				candidate.role = this.state.yearData[year][0]["title"]
				candidate.year = year
				this.setState({
					candidate: candidate
				});
			}
		}
		if (!this.props.params.year) {
			this.props.router.push(`/elections/${this.state.years[this.state.years.length - 1]}`);
		}
		if (year && !this.state.yearData[year]) {
			axios.get(`/assets/election/${year}/roles.json`)
			.then(res => {
				var yearData = this.state.yearData;
				res.data.forEach((role) => {
					this.shuffle(role.candidates);
				});
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

	selectCandidate(candidate, role, year) {
		candidate.role = role
		candidate.year = year
		this.setState({
			candidate: candidate
		});
	}

	render() {
		let year = this.props.params.year;
		let roles = this.state.yearData[year];

		const { className, ...props } = this.props;
		return (
			<Layout  {...props}>
				<div className={classnames('About', className)}>
					<div className="row">
						<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
							<h1>IUGA / Winfo Elections</h1>
						</div>
					</div>

					<div className="row">
						<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">

							<ul className="years">
								{
									this.state.years.map((year) => (
										<li key={year} className="year">
											<Link to={"/elections/" + year} activeClassName="active">{year}</Link>
										</li>
									))
								}
							</ul>
						</div>
					</div>

					{ roles &&
						(
							<div>
								<div className="row">
									<div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
										<h2>{year.name} Election Candidates:</h2>
										<ul className="list">
											{
												roles.map((role) => (
													<li key={role.title}>{role.title}
														<ul>
															{
																role.candidates.map((candidate) => (
																	<li key={candidate.name} className="name">
																		<a
																			onClick={() => this.selectCandidate(candidate, role.title, year)}
																			className={(this.state.candidate === candidate ? " active" : "")}
																		>{candidate.name}</a></li>
																))
															}
														</ul>
													</li>
												))
											}
										</ul>
									</div>
									<div className="col-xs-12 col-sm-6 col-md-8 col-lg-8">
										{ this.state.candidate &&
											(
												<div>
													<h2>{this.state.candidate.name}, {this.state.candidate.role}</h2>
													<div className="statement">
														<img
															alt={this.state.candidate.name + " for " + this.state.candidate.role}
															src={`/assets/election/${year}/${this.state.candidate.image}`}
														/>
														{
															this.state.candidate.statement.split("\n").map((p, i) => (
																<p key={i}>{p}</p>
															))
														}
														{ this.state.candidate.video &&
															(
																<div className="embed-responsive embed-responsive-16by9">
																	<iframe className="embed-responsive-item" src={this.state.candidate.video} frameBorder="0" allowFullScreen></iframe>
																</div>)
														}
													</div>
												</div>
											)
										}
									</div>
								</div>
							</div>
						)
					}
				</div>
			</Layout>
		);
	}

	selectYear(year) {
		this.setState({
			year: year
		});
	}
}
