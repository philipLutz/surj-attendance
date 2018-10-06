import React from 'react';
import { connect } from 'react-redux';
import './OnboardingPage-style.css';

export class OnboardingPage extends React.Component {
	render() {
		return (
			<div className="onboarding-page">
				<h1>SURJ Attendance tracker</h1>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {};
};

export default connect(mapStateToProps)(OnboardingPage);