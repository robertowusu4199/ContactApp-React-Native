import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ContactList from './src/screens/ContactList';

export default function App() {
  return (
    <View style={styles.container}>
      <ContactList/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
