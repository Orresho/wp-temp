import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import HomeScreen from './screens/AuthenticateScreen';
import { RootNavigatorStack } from './navigator/rootNavigator';

class App extends Component {
  render() {
    return (
      <RootNavigatorStack>
        <View style={styles.container}>
          <HomeScreen />
        </View>
      </RootNavigatorStack>
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

export default App;