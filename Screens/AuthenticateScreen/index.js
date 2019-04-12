import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import ImageList from '../../components/ImageList';
import Users from './users';

export default class HomeScreen extends Component {
  onPress = (item) => {
    const { navigate } = this.props.navigation;
    
    return navigate('HomeNavigation');
  }

  render() {
    const numColumns = 3;
    const numRows = 5;
    const width = Dimensions.get('window').width / numColumns;
    const height = Dimensions.get('window').height / numRows;
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