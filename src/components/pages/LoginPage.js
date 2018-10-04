import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import LoginForm from '../login/login-form';
import './LoginPage-style.css';

export function LoginPage(props) {
	if(props.loggedIn) {
		return <Redirect to="/account" />;
	}

	return (
		<div className="login-page">
			<LoginForm />
		</div>
	);
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LoginPage);