import React, {Component} from 'react';
import {StatusBarIOS, Text, View, Navigator, StyleSheet, StatusBar} from 'react-native';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/FontAwesome';

import { Router, Scene, Stack } from 'react-native-router-flux';
import { Actions } from 'react-native-router-flux';

import DefaultProps from '../constants/navigation';
import AppConfig from '../constants/config';
import AuthScenes from './auth';
// import LoginScreen from '../containers/LoginScreen';
import HomeScreen from '../containers/HomeScreen';
// import ForgotPasswordScreen from '../containers/ForgotPasswordScreen';
// import SignUpScreen from '../containers/SignUpScreen';
import LocaleScreen from '../containers/LocaleScreen';

import LoginScreen from '../containers/LoginScreen';
import ForgotPasswordScreen from '../containers/ForgotPasswordScreen';
import SignUpScreen from '../containers/SignUpScreen';

class TabIcon extends Component {
  render() {
    return (
      <View>
        <Icon name={this.props.iconName || "circle"} size={18} />
        <Text>{this.props.title}</Text>
      </View>
    );
  }
}

class UpperNetwork extends Component {
  componentDidMount() {
    StatusBar.setBarStyle('light-content');
    if (this.props.isAuthenticated) {
      Actions.push('home')
    }
  }

  render() {
    return (
        <Router>
					<Stack>
						<Scene key='auhenticateScene' hideNavBar>
							<Stack key="authenticate">
								<Scene
									key="login"
									component={LoginScreen}
									analyticsDesc="Login"
									hideNavBar
								/>
								<Scene
									back
									key="signUp"
									title="SIGN UP"
									{...DefaultProps.navbarProps}
									component={SignUpScreen}
								/>
								<Scene
									back
									key="forgotPassword"
									title="FORGOT PASSWORD"
									{...DefaultProps.navbarProps}
									component={ForgotPasswordScreen}
								/>
							</Stack>
						</Scene>
						<Scene key="root">
	            <Scene key="tabbar" tags={true} default="home" type="reset" duration={1}>
	              <Scene
	                key="home"
	                title="HomeScreen"
	                icon={TabIcon}
	                hideNavBar={true}
	                component={HomeScreen}
								/>
							</Scene>
          	</Scene>
				</Stack>
        </Router>
    );
  }
}

const mapStateToProps = function(state) {
  const { user } = state;
  return {
    isAuthenticated: user.isAuthenticated,
  }
};

export default connect(mapStateToProps)(UpperNetwork);
