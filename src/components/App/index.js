import React, { Component } from 'react';
import classnames from 'classnames';

import Layout from '../Layout';

import homeImage from './assets/home-image.jpg';

import './style.css';

class App extends Component {
	render() {
		const { className, ...props } = this.props;
		return (
			<Layout {...props}>
				<div className={classnames('App', className)}>
					<div className="row">
						<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
							<img className="img-responsive" alt="IUGA officers" src={homeImage} />
						</div>
					</div>
				</div>
			</Layout>
		);
	}
}

export default App;
