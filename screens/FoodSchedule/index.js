import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class FoodSchedule extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Here lies the food schedule of Moria </Text>
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
