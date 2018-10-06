import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './OnboardingPage-style.css';

export class OnboardingPage extends React.Component {
	render() {
		let button = (
			<div className="button-container">
				<Link to="/login">
					<button className="login-button">Login</button>
				</Link>
			</div>
		)
		return (
			<section className="onboarding-page">
				<h1>SURJ Attendance tracker</h1>
				<p>If you don't know what this is for, you probably don't need to be here.<p>
				<div className="button">{button}</div>
			</section>
		);
	}
}

const mapStateToProps = state => {
	return {};
};

export default connect(mapStateToProps)(OnboardingPage);