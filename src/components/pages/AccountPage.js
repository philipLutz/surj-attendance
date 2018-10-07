import React from 'react';
import { connect } from 'react-redux';
import './AccountPage-style.css';
import Attendance from '../account/Attendance';

export class AccountPage extends React.Component {
	render() {
		return (
			<section className="account-page">
				<Attendance />
			</section>
		);
	}
}

export default AccountPage;