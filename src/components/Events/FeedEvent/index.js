import React, { Component } from "react";
import moment from "moment";

import "./style.css";

const HIDE_PAST_EVENTS = true; // if true, only events that occur after today will be shown

export default class FeedEvent extends Component {
	render() {

		// If the event property does not exist
		// do not display anything
		let event = this.props.event;
		if (event == null) {
			return null;
		}
		if (HIDE_PAST_EVENTS) {
			if (moment(event.start_time).diff(moment()) < 0) {
				return null;
			}
		}

		// Precalculate necessary information
		let eventLink = "https://www.facebook.com/" + event.id;
		let eventTime = moment(event.start_time).format("LT");
		let eventDate = moment(event.start_time).format("dddd, MMMM Do");

		return (
			<div className="event-card row">
				<a href={eventLink}>
					<div className="event-period text-center col-md-2 col-lg-2">
						<div className="event-time">{eventTime}</div>
						<div className="event-date">{eventDate}</div>
					</div>
					<div className="event-descr-wrapper col-md-10 col-lg-10">
						<p className="event-title">{event.name}</p>
						<p className="event-descr">{event.description}</p>
					</div>
				</a>
			</div>
		);
	}
}
