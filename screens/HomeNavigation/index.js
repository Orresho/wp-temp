import React, { Component } from 'react';
import NavigationList from '../../components/HomeNavigation/NavigationList';

import navigationData from '../../components/HomeNavigation/_NavigationConfig';

export default class HomeScreen extends Component {
	static navigationOptions = {
		title: 'Welcome',
	};

	// Create press handler for each screen specified in the config file
	_handleNavigate = (screen, data) => {
		const { navigate } = this.props.navigation;
		return navigate(screen, data)
	}

	render() {
		return (
			<NavigationList
				data={navigationData}
				onNavigate={this._handleNavigate}
			/>
		);
	}
}