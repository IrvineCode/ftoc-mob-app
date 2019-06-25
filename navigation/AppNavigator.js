import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import LoginScreen from '../screens/LoginScreen';
import SettingsScreen from '../screens/SettingsScreen';

const AuthStack = createStackNavigator({
    Login: LoginScreen
  },
  {headerMode: 'none'}
)

const AppStack = createStackNavigator({
    Main: MainTabNavigator,
    Settings: SettingsScreen,
  },
  {headerMode: 'none'} 
)

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    AuthLoading: AuthLoadingScreen,
    Auth: AuthStack,
    App: AppStack 
  },
  {
    initialRouteName: 'Auth'
  }
));
