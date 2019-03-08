import React, { Component } from 'react';
import { Alert, Dimensions } from 'react-native';
import ImageList from '../../Components/ImageList';
import Users from './users';

const numColumns = 3;
const numRows = 5;
const width = Dimensions.get('window').width/numColumns;
const height = Dimensions.get('window').height/numRows;


export default class HomeScreen extends Component {
  render() {
    return (
      <ImageList
        users={Users}
        columns={numColumns}
        width={width}
        height={height}
      />
    );
  }
}