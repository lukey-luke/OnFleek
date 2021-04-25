import React from 'react';
import { StyleSheet, View, TextInput } from "react-native";
import { Component } from 'react';


const SearchComponent = () => {
  const [text, onChangeText] = React.useState("Useless Text");
  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={
          (change) => {
            console.log('change event: ', change);
            onChangeText(text + '0')
          }
        }
        value={text}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'salmon'
  },
});
export default SearchComponent;
