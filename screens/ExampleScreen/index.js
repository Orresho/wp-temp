import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ExampleScreen extends Component {
  static navigationOptions = {
		title: 'Example',
  };
  
  render() {
    return (
      <View style={styles.container}>
        <Text>Example Component </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
