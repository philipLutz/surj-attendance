import React from 'react';
import {Route, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from './navigation/navigation';
import LoginPage from './pages/LoginPage';
import AccountPage from './pages/AccountPage';
import OnboardingPage from './pages/OnboardingPage';
import SignupPage from './pages/SignupPage';
import { refreshAuthToken, storeAuthInfo } from '../actions/auth';
import './app.css';

export class App extends React.Component {
	componentDidMount() {
        const token = localStorage.getItem('authToken');
        if (token) {
            storeAuthInfo(token, this.props.dispatch)
        }
    }

    componentDidUpdate(prevProps) {
        if (!prevProps.loggedIn && this.props.loggedIn) {
            this.startPeriodicRefresh();
        } else if (prevProps.loggedIn && !this.props.loggedIn) {
            this.stopPeriodicRefresh();
        }
    }
    componentWillUnmount() {
        this.stopPeriodicRefresh();
    }
    startPeriodicRefresh() {
        this.refreshInterval = setInterval(
            () => this.props.dispatch(refreshAuthToken()),
            60 * 60 * 1000
        );
    }
    stopPeriodicRefresh() {
        if (!this.refreshInterval) {
            return;
        }
        clearInterval(this.refreshInterval);
    }

    render() {
        return (
            <div className="wrapper">
                <div className="app">
                    <div id="nav-container">
                        <Navbar />
                    </div>
                    <main className="content">
                        <Route exact path="/" component={OnboardingPage} />
                        <Route exact path="/login" component={LoginPage} />
                        <Route exact path="/account" component={AccountPage} />
                    </main>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
	hasAuthToken: state.auth.authToken !== null,
	loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(App));
