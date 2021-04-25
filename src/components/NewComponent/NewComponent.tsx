import React from 'react';
import { StyleSheet, View, Text } from "react-native";
import { Component } from 'react';
// 
// import styles from './GeneratedComponent.module.css';

// const GeneratedComponent: React.FC = () => (
//   <div className={styles.GeneratedComponent} data-testid="GeneratedComponent">
//     GeneratedComponent Component test test test
//   </div>
// );

// export default GeneratedComponent;



export default class NewComponent extends Component {
  render() {
    return (
      <View style={styles.container}>// you need to wrap the two Views an another View
        <Text>Hello World!</Text>
        <Text>Hello World!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blueviolet'
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
