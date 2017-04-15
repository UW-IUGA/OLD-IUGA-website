import React, { Component } from "react";
//import classnames from "classnames";

import axios from "axios";
import FeedEvent from "./FeedEvent";

import "./style.css";

const FEED_URL = "http://iuga-server.ischool.uw.edu/get";

export default class Events extends Component {
	constructor(props) {
		super(props);

		this.state = {
			events: null
		};
	}

	componentDidMount() {
		axios.get(FEED_URL)
			.then(res => {
				console.log(res.data);
				this.setState({
					events: res.data
				});
			}).catch(() => {});
	}
	
	render() {

		let events = this.state.events;
		if (events == null) {
			return null;
		}

		return (
			<div>
				<h1>Upcoming IUGA Events</h1>

				{events.reverse().map((event) => (
					<FeedEvent event={event} key={event.id}></FeedEvent>
				))}
			</div>
		);
	}
}

/*
			<div className={classnames("Events", this.props.className)}>
				<div className="row">
					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<h1>IUGA calendar of Events</h1>
					</div>
				</div>

				<div className="row">
					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<div className="embed-responsive embed-responsive-16by9">
							<iframe src={"https://calendar.google.com/calendar/embed?src=uw.edu_neh0b0p4hso7ot07e5bnbimq8k%40group.calendar.google.com&" + (this.props.params.unit ? "mode=" + this.props.params.unit + "&": "") + "ctz=America/Los_Angeles"}
							className="embed-responsive-item"
							style={{border: 0}} width="800" height="600" frameBorder="0" scrolling="no"></iframe>
						</div>
					</div>
				</div>
			</div>
*/