import React, { Component } from 'react';
import { StyleSheet, Alert, View, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import ImageLoader from '../../Components/ImageLoader';
import Users from './users';

const numColumns = 3;
const numRows = 5;
const width = Dimensions.get('window').width/numColumns;
const height = Dimensions.get('window').height/numRows;

const styles = StyleSheet.create({
  itemContainer: {
    width: width,
    height: height,
    backgroundColor: '#287dc5',
  },
  image : {
    width: width,
    height: height,
  }
});

export default class HomeScreen extends Component {
  onPress = (item) => {
    Alert.alert('Hi '+item.value+'! Login with your personal code');
  }
  render() {
    return (
      <FlatList
        data={Users}
        renderItem={({item}) => (
          <View style={styles.itemContainer}>
            <TouchableOpacity onPress= {()=> this.onPress(item)}>
              <ImageLoader style={styles.image} source={item.image} />
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={item => item.id}
        numColumns={numColumns} />
    );
  }
}