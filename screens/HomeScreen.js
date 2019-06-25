import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Header, Tile } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';

import { MonoText } from '../components/StyledText';
import { Colors } from '../constants/Colors';

export default function HomeScreen(props) {

  HomeScreen.navigationOptions = {
    header: (null)
  }

  return (
    <View style={styles.container}>
      <Header 
        title='Home'
        style={styles.container}
        leftComponent={
          <Ionicons
            name="md-construct"
            color="#fff"
            size={32}
            onPress={() => {props.navigation.push("Settings")}}
          />
        }
      />
        
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>

        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>Featured</Text>
        </View>

        {/* Add Tile Content from firebase */}
        <Tile>
        </Tile>

      </ScrollView>

    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  settingsImage: {
    width: 32,
    height: 32,
    position: 'absolute',
    left: 20,
    top: 40,
    zIndex: 10
  },
  headingContainer: {
    alignItems: 'flex-start',
    marginHorizontal: 20,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  headingText: {
    fontSize: 20,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'left',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
