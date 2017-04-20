import React, { Component } from "react";
import moment from "moment";
import Linkify from "react-linkify";

import "./style.css";

const HIDE_PAST_EVENTS = true; // if true, only events that occur after today will be shown

export default class FeedEvent extends Component {
	
	render() {

		// If the event property does not exist
		// do not display anything
		let event = this.props.event;
		if (!event) {
			return null;
		}
		if (HIDE_PAST_EVENTS) {
			if (moment(event.start_time).diff(moment()) < 0) {
				return null;
			}
		}

		// Determine the location info to display if there is a location
		// envoded in the event data
		let eventLoc;
		if (!event.place) {
			eventLoc = "No place given";
		} else {
			eventLoc = event.place.name;
		}

		// Determine the link to be used for the google maps location
		// if there is a location encoded in the event data.
		let eventLocPre = event.place.location;
		let eventLocLink;
		if (event.place.location) {
			eventLocLink = "https://www.google.com/maps/place/";
			if (eventLocPre.street) {
				eventLocLink += eventLocPre.street + " " + eventLocPre.city + " " + eventLocPre.state + " " + eventLocPre.zip;
			} else {
				eventLocLink += eventLocPre.latitude + " " + eventLocPre.longitude;
			}
		}

		// Precalculate necessary information
		let eventLink = "https://www.facebook.com/" + event.id;
		let eventTime = moment(event.start_time).format("LT");
		let eventDate = moment(event.start_time).format("dddd, MMMM Do");

		return (
			<div className="event-card row">
				<div className="event-img-wrapper text-center col-md-2 col-lg-2">
					<img className="event-img" src={event.cover.source}/>
				</div>
				<div className="event-period text-center col-md-2 col-lg-2">
					<p className="event-time">{eventTime}</p>
					<p className="event-date">{eventDate}</p>
					{event.place.location ? (
						<a href={eventLocLink} target="_blank"><p className="event-loc">{eventLoc}</p></a>
					) : (
						<p className="event-loc">{eventLoc}</p>
					)}
				</div>
				<div className="event-descr-wrapper col-md-8 col-lg-8">
					<p className="event-title">{event.name}</p>
					<div className="event-descr">{event.description.split("\n").map((data, index) => {
						return (
							<Linkify properties={{className:"event-descr-link", target:"_blank"}} key={index + "link"}>
								<p key={index + "data"} className="event-descr-paragraph">{data}</p>
							</Linkify>
							);
					})}</div>
					<a className="event-link" href={eventLink} target="_blank">View the Facebook event ></a>
				</div>
			</div>
		);
	}
}
