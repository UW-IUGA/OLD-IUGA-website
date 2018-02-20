import React, { Component } from "react";

import axios from "axios";
import FeedEvent from "./FeedEvent";

import "./style.css";

const FEED_URL = "https://iuga.info/api/v1/events";

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
				this.setState({
					events: res.data,
				});
			}).catch(() => {});
	}
	
	render() {
		let events = this.state.events;

		return (
			<div>
				<h1>Upcoming IUGA Events</h1>
				{events != null ? (
					events.reverse().map((event) => (
						<FeedEvent event={event} key={event.id}></FeedEvent>
					))
				) : (
					<center><p>Looks like we're having trouble getting events from the IUGA event server. If this continues
					please contact <a href="mailto:iuga@uw.edu">iuga@uw.edu</a>.</p></center>
				)}
			</div>
		);
	}
}
