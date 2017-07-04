import React, { Component } from "react";
import classnames from "classnames";

import "./style.css";

export default class About extends Component {
	render() {
		return (
			<div className={classnames("About", this.props.className)}>
				<div className="row">
					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<h1>About Us</h1>
					</div>
				</div>

				<section id="IUGA">

					<div className="row">
						<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
							<h2>What is IUGA?</h2>
						</div>
					</div>

					<div className="row">
						<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
							<div className="other-about">
								<p>
									The Informatics Undergraduate Association (IUGA) is a Registered Student Organization that functions as a student government for Informatics students. IUGA provides official channels for communication between the Informatics undergraduate
									student body and the faculty and administration of the Information School. IUGA promotes the interests of, and acts as an advocate for current and prospective Informatics students in/to the Information School at the University of Washington.
									We provide an opportunity for social, educational, and professional activities for the Informatics student body. IUGA and its members are actively involved in the Information School community. It is the responsibility of IUGA to provide
									its members with the tools to help them both in their undergraduate studies and beyond, as well as to foster a greater sense of community within the Informatics program.
								</p>
							</div>
						</div>
					</div>

				</section>

				<section id="Officers">

					<div className="row">
						<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
							<h2>Who are the officers? What Do They Do?</h2>
						</div>
					</div>

					<div className="row">
						<div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
							<div className="officer">
								<p><img alt="Ethan" className="img-responsive" src="https://www.gravatar.com/avatar/28521494ce9da7d927333c96f5ec4e28?s=1000" width="400" height="200"/></p>

								<h3>Ethan Anderson</h3>

								<h4>President</h4>

								<p>The President is the head of IUGA and their responsibilities include:</p>
								<ul>
									<li>Lead IUGA Meetings</li>
									<li>Represent Informatics to faculty and staff with the Vice President</li>
									<li>Shepherd and guide newly elected IUGA Officers during the annual transition</li>
									<li>Act as backup for the Director of Finance for financial matters</li>
									<li>Act as, or designate, the Informatics Representative On the iSchool Program Committee</li>
									<li>Act as liaison to other iSchool student organizations</li>
								</ul>
							</div>
						</div>
						<div className="clearfix visible-xs-block"></div>

						<div className="col-xs-12 col-sm-6 col-md-6 col-lg-4" id="marissa">
							<div className="officer">
								<p><img alt="Jessica" className="img-responsive" src="https://www.gravatar.com/avatar/e8df77a324da6f00cade54b6e385730c?s=1000" /></p>

								<h3>Jessica Libman</h3>

								<h4>Vice President</h4>

								<p>The Vice President fills roles as needed and has core repsonsibilities with which they are entrusted. These core responsibilities include the following.</p>
								<ul>
									<li>Backup for the President</li>
									<li>Collaborates with the Director of Outreach when communicating with External Groups</li>
									<li>Responsible for scheduling bi-weekly meetings</li>
									<li>Responsible for booking venues for all IUGA events</li>
									<li>Responsible for handling the yearly Registration of IUGA with the SAO</li>
									<li>Responsible for the meeting minutes of every IUGA meeting</li>
									<li>Act as the Primary Point of Contact for Student Services when dealing with the Informatics Recruitment Process</li>
									<li>Fulfill or Designate a student to fill a seat on the iSchool Student Leadership Committee and the Informatics Program Committee</li>
								</ul>
							</div>
						</div>
						<div className="clearfix visible-xs-block visible-sm-block visible-md-block"></div>

						<div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
							<div className="officer">
								<p><img alt="Davin" className="img-responsive" src="https://www.gravatar.com/avatar/f3d811ac78807ea22b000804c26c615c?s=1000" /></p>

								<h3>Davin Lee</h3>

								<h4>Director of Finance</h4>

								<p>The director of finance maintains the Association&rsquo;s financial records. This includes the following items:</p>
								<ul>
									<li>Maintain the Financial Records</li>
									<li>Provide Reports On Finances to IUGA</li>
									<li>Fulfill or Designate a Student Representative for Informatics on the iSchool Student Leadership Committee</li>
									<li>Organize the Financial Vectors of IUGA fundraising efforts</li>
									<li>Prepare and Submit the Yearly IUGA Budget to iSchool Administration</li>
									<li>Act as the Primary Account Holder for All IUGA Financial Accounts</li>
									<li>Handle merchandise ordering and distribution</li>
									<li>Help the incoming Director of Finance with the Yearly Budget during Spring Quarter</li>
								</ul>
							</div>
						</div>
						<div className="clearfix visible-xs-block visible-lg-block"></div>

						<div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
							<div className="officer">
								<p><img alt="Daniel" className="img-responsive" src="https://www.gravatar.com/avatar/7e13167224e4e12901e99cdc738e609d?s=1000" /></p>

								<h3>Daniel Hoang</h3>

								<h4>Creative Director</h4>

								<p>To better fit the needs of our Association, the current Executive Council has decided to create a new Officer Role to better meet the needs of a growing academic program. The Creative Director will work on creating the visual style of the IUGA brand and take initiative in creating and delivering branded items. These responsibilities will include:</p>
								<ul>
									<li>Creating merchandise for IUGA, including clothing</li>
									<li>Creating informational posters/flyers for IUGA events</li>
									<li>Maintain the IUGA logo and design styling</li>
									<li>Create a team to help in the creation of Informatics branded items</li>
									<li>Assist Finance with ordering and distribution of merchandise</li>
								</ul>
							</div>
						</div>
						<div className="clearfix visible-xs-block visible-sm-block visible-md-block"></div>

						<div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
							<div className="officer">
								<p><img alt="Alex" className="img-responsive" src="https://www.gravatar.com/avatar/a0276c2499a4226ad89bab4167381329?s=1000" /></p>

								<h3>Alex Gilbert</h3>

								<h4>Director of Public Relations</h4>

								<p>The Director of Public Relations serves a vital communication role within the Executive Council. These responsibilities Include:</p>
								<ul>
									<li>Communicate Announcement and Events to Informatics Students</li>
									<li>Lead the Planning and Organization of Social Events</li>
									<li>Ensure the Smooth Operation and Execution of All IUGA events</li>
									<li>Oversee Elections</li>
								</ul>
							</div>
						</div>
						<div className="clearfix visible-xs-block"></div>

						<div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
							<div className="officer">
								<p><img alt="Sanjana" className="img-responsive" src="https://www.gravatar.com/avatar/61467e82d8a0a535adc0dc4bd21c744f?s=1000" /></p>

								<h3>Sanjana Galgalikar</h3>

								<h4>Director of Outreach</h4>

								<p>The Director of Outreach is responsible for representing both the Informatics Program and the IUGA to the professional community. They do this by:</p>
								<ul>
									<li>Working with Students Services and the Career Center to promote employment and professional development events.</li>
									<li>Work with Student Services to facilitate alumni relations</li>
									<li>Promote Informatics to the University of Washington at Large and the Professional Community Along with the Vice President</li>
									<li>Responsible for organizing and executing professional development events for Informatics</li>
								</ul>
							</div>
						</div>
						<div className="clearfix visible-xs-block visible-sm-block visible-md-block visible-lg-block"></div>

						<div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
							<div className="officer">
								<p><img alt="Rosemary" className="img-responsive" src="https://www.gravatar.com/avatar/a8a0c7ddb4baf8ef9c4ca500ae78a4fe?s=1000" /></p>

								<h3>Rosemary Adams</h3>

								<h4>Director of Diversity Efforts</h4>

								<p>The Director of Diversity Efforts works to promote diversity both within the major and the iSchool. This includes, but is not limited to, the following:</p>
								<ul>
									<li>Support and promote activist-oriented RSOs</li>
									<li>Organize and promote diversity and inclusion events for the iSchool</li>
									<li>Work closely with the Diversity Programs Advisor to ideate and execute diversity initiatives</li>
									<li>Support and engage in an active Diversity Committee composed of students, faculty and staff</li>
									<li>Fulfill, or appoint a student, to sit on the Informatics Admissions Committee during the summer</li>
									<li>Ensure that the events, ideas, and products of IUGA are made with the thought of diversity and inclusion</li>
									<li>Collaborate with Student Services and other Registered Student Organizations (RSOs) on campus for diversity and inclusion events</li>
								</ul>
							</div>
						</div>
						<div className="clearfix visible-xs-block"></div>

						<div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
							<div className="officer">
								<p><img alt="Brendan" className="img-responsive" src="https://www.gravatar.com/avatar/cf22063adb17e4e0b9e2d60500b818fe?s=1000" /></p>

								<h3>Brendan Kellogg</h3>

								<h4>Director of Information Technology</h4>

								<p>The Director of Information Technology helps run the Association&rsquo;s technology projects and online presence. While providing support when needed. This is done by doing the following:</p>
								<ul>
									<li>Maintain and update the IUGA Website and associated websites using the latest web technologies</li>
									<li>Monitor and maintain the IUGA gaming servers and associated assets</li>
									<li>Maintain all IUGA online account credentials in a secure and scalable system</li>
									<li>Manage permissions and security settings for IUGA assets across social networks and collaborative systems</li>
									<li>Oversee and run technology aspects of IUGA events, including the quarterly Game Night</li>
									<li>Work closely with iSchool IT and the Administration to connect the student body with all available technology and services</li>
									<li>Support, Service, and Create Technology solutions for needs within the Association and the iSchool</li>
								</ul>
							</div>
						</div>
						<div className="clearfix visible-xs-block visible-sm-block visible-md-block"></div>

						<div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
							<div className="officer">
								<p><img alt="Chris" className="img-responsive" src="https://www.gravatar.com/avatar/c04ec6c32f3fd8009ab1632077f2af3c?s=1000" /></p>

								<h3>Chris Oh</h3>

								<h4>Director of Academic Support</h4>

								<p>The Director of Academic Support is responsible for supporting the academic needs within the Informatics Program. These responsibilities Include:</p>
								<ul>
									<li>Understand the needs of current students</li>
									<li>Organize and promote academic related events</li>
									<li>Maintain the Informatics wiki, which helps to provide available resources</li>
									<li>Work closely with other organizations to conduct joint events</li>
								</ul>
							</div>
						</div>
						<div className="clearfix visible-xs-block visible-sm-block visible-md-block"></div>
					</div>
				</section>

				<section id="Membership">

					<div className="row">
						<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
							<h2>Membership</h2>
						</div>
					</div>

					<div className="row">
						<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
							<div className="other-about">
								<p>
									Membership eligibility in IUGA is held by matriculated declared Informatics majors as defined by the Information School and the University of Washington. Members must also be in good disciplinary standing as outlined in the Student Code
									at the University of Washington.
								</p>
							</div>
						</div>
					</div>

				</section>

				<section id="Contact">

					<div className="row">
						<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
							<h2>Contact Us</h2>
						</div>
					</div>

					<div className="row">
						<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
							<div className="other-about">
								<h3>Have a comment, question, or suggestion?</h3>

								<p>
									Email us at: <a className="contact" href="mailto:iuga@uw.edu">iUGA@uw.edu</a>
								</p>
							</div>
						</div>
					</div>

				</section>

				<p><a href="#top">&uarr; back to top</a></p>
			</div>
		);
	}
}
