import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Header } from 'react-native-elements';


import { MonoText } from '../components/StyledText'; 
import { Ionicons } from '@expo/vector-icons';

import firebase from 'firebase';

export default function SettingsScreen(props) {
  
  SettingsScreen.navigationOptions = {
    header: (null),
  };
  
  return(
    <View style={styles.container}>

      <Header 
        style={styles.container}
        leftComponent={
          <Ionicons
            name="md-arrow-back"
            color="#fff"
            size={32}
            onPress={() => {props.navigation.goBack()}}
          />
        }
      />

      <View
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>

        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>Email</Text>
          <Text style={styles.info}>{firebase.auth().currentUser.email}</Text>
        </View>
        {/* <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>Password</Text>
          <Text style={styles.info}>{firebase.auth().currentUser.email}</Text>
        </View> */}


      </View>

    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    height: '100%',
  },
  contentContainer: {
    justifyContent: 'space-around',
    backgroundColor: '#fff',
  },
  info: {
    fontSize: 20,
    color: 'rgba(96,100,109, 1)',
  },
  infoContainer: {
    justifyContent: 'space-evenly',
    borderWidth: 1,
    borderColor: 'gray',
  },
  infoTitle: {

    fontSize: 16,
    color: 'skyblue',
  },
});