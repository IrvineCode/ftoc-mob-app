import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  View,
  Text,
} from 'react-native';

export default function AuthLoadingScreen(props) {

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('userToken');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
        props.navigation.navigate(userToken ? 'App' : 'Auth');
    };

    // Render any loading content that you like here

    return (
        <View>
        <ActivityIndicator />
        <Text>Hello</Text>
        <StatusBar barStyle="default" />
        </View>
    );
}