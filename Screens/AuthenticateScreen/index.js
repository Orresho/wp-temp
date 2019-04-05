import React, { Component } from 'react';
import { Alert, Dimensions } from 'react-native';
import ImageList from '../../components/ImageList';
import Users from './users';

export default class HomeScreen extends Component {
  onPress = (item) => {
    Alert.alert('Hi '+item.value+'! Login with your personal code');
    // navigate to home screen
    console.log(this.props)
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