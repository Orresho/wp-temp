import React, { Component } from 'react';
import { Alert, Dimensions, Animated } from 'react-native';
import ImageList from '../../Components/ImageList';
import Users from './users';

export default class HomeScreen extends Component {
  
  onPress = (item) => {
    Alert.alert('Hi '+item.value+'! Login with your personal code');
  }
  
  render() {
    const numColumns = 3;
    const numRows = 5;
    const width = Dimensions.get('window').width/numColumns;
    const height = Dimensions.get('window').height/numRows;
    return (
      <ImageList
        users={Users}
        columns={numColumns}
        width={width}
        height={height}
        onPress={this.onPress}
      />
    );
  }
}