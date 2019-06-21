import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default function AnnouncementsScreen() {
  return (
    <ScrollView style={styles.container}>
      {/**
       */}
      <ExpoLinksView />
    </ScrollView>
  );
}

AnnouncementsScreen.navigationOptions = {
  title: 'Announcements',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
