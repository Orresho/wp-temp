import React, { Component } from 'react';
import {Dimensions, View } from 'react-native';
import ImageList from '../../Components/ImageList';
import Authentication from '../../Components/Authentication';
import Users from './users';

export default class AuthScreen extends Component {
  state = {
    isLoggingIn: false,
    isLoggingInUser: 0,
  };
  onPress = (item) => {
    this.setState({isLoggingIn: true});
    this.setState({isLoggingInUser: item});
  }
  onClose = () => {
    this.setState({isLoggingIn: false});
    this.setState({isLoggingInUser: 0});
  }
  
  render() {
    const numColumns = 3;
    const numRows = 5;
    const width = Dimensions.get('window').width/numColumns;
    const height = Dimensions.get('window').height/numRows;
    return (
      <View>
        {!this.state.isLoggingIn ? (
          <ImageList
            users={Users}
            columns={numColumns}
            width={width}
            height={height}
            onPress={this.onPress}
          />
        ) : (
          <Authentication
            user={this.state.isLoggingInUser}
            onClose={this.onClose}
          />
        )}
      </View>
    );
  }
}