import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import NewComponent from './src/components/NewComponent/NewComponent';
import SearchComponent from './src/components/SearchComponent/SearchComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>example text</Text>
      <StatusBar style="auto" />
      <SearchComponent/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
