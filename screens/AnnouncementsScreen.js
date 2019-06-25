import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';


export default function AnnouncementsScreen() {
  return (
    <ScrollView style={styles.container}>
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
