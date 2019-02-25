import React, { Component } from "react";
import classnames from "classnames";

import "./style.css";

export default class Candidate extends Component {
	render() {
		if (this.props.candidate === null) {
			return null;
		}

		const { className } = this.props;
		return (
			<div className={classnames("Candidate", className)}>
				<div className="row">
					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">

						{/* uncomment for just discription */}
						{/* {(this.props.role.organization.roles.description && this.props.role.organization.roles.title) && <h2>{this.props.candidate.name}, {this.props.candidate.outcome != null ? (<span className="Elected">{this.props.candidate.outcome} {this.props.candidate.role}</span>) : this.props.candidate.role}</h2>} */}
						{!this.props.role.organization.roles.description && <h2>{this.props.candidate.role}</h2>}

					</div>
				</div>

				{/* {!this.props.role.organization.roles.description && <div className="row">
					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<div className="description">
					
							{  // role description 
							this.props.year == 2019 &&
							this.props.role.organization.roles.map((rl) => (
								// console.log(this.props.year),
								this.props.candidate.role === rl.title ? (
									rl.description.split("\n").map((p, i) => (
									<p key={i}>{p}</p> 
								))) : ""
							))
							}						
						</div>
					</div>
				</div>} */}
				
					{/* nomination form */}
				{/* {this.props.year == 2019 && <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdt5-ETaMhIqEYTj_8C0QaV0w0UWPS9-Fop2cVbiF7hlVqLuA/viewform?embedded=true" width="640" height="800" frameBorder="0" marginHeight="0" marginWidth="0">Loading...</iframe>}			 */}

				{ this.props.candidate.adminMessage &&
					(
						<div className="row">
							<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<p className="alert alert-info">{this.props.candidate.adminMessage}</p>
							</div>
						</div>
					)
				} 

				{/* uncomment letter */}
				{<div className="row">   
					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<div className="statement">

						{!this.props.candidate.image.startsWith("https") && (
							<img  
								alt={this.props.candidate.name + " for " + this.props.candidate.role}
						src={`/assets/election/${this.props.year}/${this.props.candidate.image}`}/> )}
			
							{this.props.candidate.image.startsWith("https") && 
							(<img 
								alt={this.props.candidate.name + " for " + this.props.candidate.role}
							src={this.props.candidate.image}/>)}

							{  // candidates statement 
								this.props.candidate.statement.split("\n").map((p, i) => (
									<p key={i}>{p}</p> 
								))
							}
						</div>
					</div>
				</div>}
				
				{/* uncomment letter */}
				{ // candidates video
					(this.props.candidate.video) &&
					(
						<div className="row">
							<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<div className="embed-responsive embed-responsive-16by9">
									<iframe width="560" height="315" src={this.props.candidate.video} frameBorder="0" allowFullScreen></iframe>
								</div>
							</div>
						</div>
					)
				}
			</div>
		);
	}
}
