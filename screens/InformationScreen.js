import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default function InformationScreen() {
  return (
    <ScrollView style={styles.container}>
      {/**
       */}
      <ExpoLinksView />
    </ScrollView>
  );
}

InformationScreen.navigationOptions = {
  title: 'Information',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
