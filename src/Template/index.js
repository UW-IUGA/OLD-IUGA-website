/*
 * Changing this file requires a restart of the Development server.
 */

import React from "react";

import icon from "../assets/images/icon.png";

// Google Analytics
var googleAnalytics = `
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

	ga('create', 'UA-92248233-1', 'auto');
	ga('send', 'pageview');
`;

// Smartlook
var smartlook = `
	window.smartlook||(function(d) {
	var o=smartlook=function(){ o.api.push(arguments)},h=d.getElementsByTagName('head')[0];
	var c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript';
	c.charset='utf-8';c.src='//rec.smartlook.com/recorder.js';h.appendChild(c);
	})(document);
	smartlook('init', '4b57d5158a86253a0f61125df9b101569598f7db');
`;

let headTags = {
	default: [
		(<meta property="og:title"       content="IUGA"/>),
		(<meta property="og:site_name"   content="Informatics Undergraduate Association (IUGA) "/>),
		(<meta property="og:description" content="The Informatics Undergraduate Association (IUGA) is a Registered Student Organization that functions as a student government for Informatics students."/>),
		(<meta property="og:image"       content="http://iuga.info/assets/img/facebook-image.jpg"/>),
		(<meta property="og:type"        content="school"/>)
	],
	election: [
		(<meta property="og:title"       content="IUGA / Winfo Elections"/>),
		(<meta property="og:site_name"   content="Informatics Undergraduate Association (IUGA) "/>),
		(<meta property="og:description" content="The fate of both IUGA and Winfo is in your hands! Do your civic duty and vote!"/>),
		(<meta property="og:image"       content="http://iuga.info/assets/img/facebook-election-image.png"/>),
		(<meta property="og:type"        content="school"/>),
		(<meta property="og:url"         content="http://iuga.info/elections/" />)
	]
};

export default class Template extends React.Component {
	render() {
		let tags;
		let path = this.props.location.pathname;
		switch(true) {
		case /\/elections(\/.*){0,}/.test(path):
			tags = headTags.election;
			break;
		default:
			tags = headTags.default;
		}
		return(
			<html lang="en">
				<head>
					<meta charSet="utf-8"/>
					<meta name="viewport" content="width=device-width, initial-scale=1"/>
					<link rel="shortcut icon" href={icon}/>

					<title>IUGA</title>

					<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css"/>

					<link rel="stylesheet" href="{{CSS}}"/>

					{tags}

				</head>
				<body>
					<div id="root">
						{this.props.children}
					</div>
					<script type="text/javascript" src="{{JS}}"></script>
					<script type="text/javascript" dangerouslySetInnerHTML={{__html: googleAnalytics}}></script>
					<script type="text/javascript" dangerouslySetInnerHTML={{__html: smartlook}}></script>
				</body>
			</html>
		);
	}
}
