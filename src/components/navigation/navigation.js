import React from 'react';
import './navigation.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearAuth } from '../../actions/auth';
import { clearAuthToken } from '../../local-storage';

export class Navbar extends React.Component {
	logout() {
		this.props.dispatch(clearAuth());
		clearAuthToken();
	}
	render() {
		let logOutButton;
		let loginButton;
		let accountButton;

		if (this.props.loggedIn) {
			logOutButton = (
				<button className="logout-button" onClick={() => this.logout()}>
					<Link to="/">Log Out</Link>
				</button>
			);
			accountButton = (
				<button><Link to="/account">Account</Link></button>
			);
		} else {
			loginButton = (
				<button><Link to="/login">Login</Link></button>
			);
		}

		return (
			<React.Fragment>
				<header className="navbar">
					<nav className="navigation">
						<div className="navigation-items">
							<ul>
								{accountButton}
								{loginButton}
								{logOutButton}
							</ul>
						</div>
					</nav>
				</header>
			</React.Fragment>

		);
	}
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Navbar);