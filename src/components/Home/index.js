import React, { Component } from "react";
import classnames from "classnames";

import homeImage from "./assets/home-image.jpg";

import "./style.css";

export default class Home extends Component {
	render() {
		return (
			<div className={classnames("Home", this.props.className)}>
				<div className="row">
					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<img className="img-responsive" alt="IUGA officers" src={homeImage} />
					</div>
				</div>
			</div>
		);
	}
}
