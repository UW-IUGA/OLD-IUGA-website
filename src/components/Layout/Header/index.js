import React, { Component } from "react";
import classnames from "classnames";

import headerImage from "../assets/IUGA-header-image.jpg";

import { Link, IndexLink } from "react-router";
import NavLink from "../NavLink";

export default class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
			mobileNav: false
		};
	}

	render() {
		return(
			<header className={classnames("Header", this.props.className)}>
				<nav>

					<div className="container">
						<Link to="/"><img alt="IUGA Logo" id="logo" src={headerImage} /></Link>
						<a href="/"></a>
						<ul id="big-nav">
							<li><IndexLink to="/" activeClassName="active">home</IndexLink></li>
							<li><NavLink to="/events">events</NavLink></li>
							<li><NavLink to="/elections">election</NavLink></li>
							<li><a href="http://store.iuga.info/" target="_blank">store</a></li>
							<li>
								<a href="https://catalyst.uw.edu/webq/survey/kiduss/366946" className="button7" target="_blank"><span>vote</span>
								</a>
							</li>
						</ul>
						<button type="button" onClick={() => {this.toggle();}} className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
							<span className="glyphicon glyphicon-th-list"></span>
						</button>
					</div>

				</nav>

				<div hidden={!this.state.mobileNav}>

					<ul id="small-nav">
						<li><IndexLink to="/" activeClassName="active">home</IndexLink></li>
						<li><NavLink to="/events">events</NavLink></li>
						<li><NavLink to="/elections">election</NavLink></li>
						<li><a href="http://store.iuga.info/" target="_blank">store</a></li>
						<li>
							<a href="https://catalyst.uw.edu/webq/survey/kiduss/366946" className="button7" target="_blank">
							<span>Vote</span>
							</a>
						</li>
					</ul>

				</div>
			</header>
		);
	}

	toggle() {
		this.setState({
			mobileNav: !this.state.mobileNav
		});
	}
}
