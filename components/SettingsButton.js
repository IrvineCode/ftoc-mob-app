import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import { Colors } from '../constants/Colors';

import {Text} from 'react-native';

export function SettingsButton(props) {
  return (
    <Ionicons
      name="md-menu"
      color="#000000"
      size={32}
      style={{ 
        position: 'absolute',
        left : 20,
        top: 40,
        zIndex: 10,
      }}
      onPress = {() => {props.navigation.toggleDrawer()}}
    />
  );
}
