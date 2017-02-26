import React, { Component } from "react";
import classnames from "classnames";

import "./style.css";

export default class Events extends Component {
	render() {
		return (
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
		);
	}
}
