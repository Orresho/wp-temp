import React, { Component } from 'react';
import { StyleSheet, Alert, View, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import ImageLoader from '../../Components/ImageLoader';

const users = [
  {id: '1', value: 'Hanna', image: require('../../assets/images/users/hanna.jpg')},
  {id: '2', value: 'Eddy', image: require('../../assets/images/users/eddy.jpg')},
  {id: '3', value: 'Johan S', image: require('../../assets/images/users/johans.jpg')},
  {id: '4', value: 'Marianne', image: require('../../assets/images/users/hanna.jpg')},
  {id: '5', value: 'Catharina', image: require('../../assets/images/users/hanna.jpg')},
  {id: '6', value: 'Henry', image: require('../../assets/images/users/hanna.jpg')},
  {id: '7', value: 'Lina', image: require('../../assets/images/users/hanna.jpg')},
  {id: '8', value: 'Angela', image: require('../../assets/images/users/hanna.jpg')},
  {id: '9', value: 'Orhan', image: require('../../assets/images/users/orhan.jpg')},
  {id: '10', value: 'Kristoffer', image: require('../../assets/images/users/hanna.jpg')},
  {id: '11', value: 'Johan G', image: require('../../assets/images/users/hanna.jpg')},
  {id: '12', value: 'Alexis', image: require('../../assets/images/users/hanna.jpg')},
  {id: '13', value: 'Janne', image: require('../../assets/images/users/hanna.jpg')},
  {id: '14', value: 'Sebbe', image: require('../../assets/images/users/hanna.jpg')},
  {id: '15', value: 'Micke', image: require('../../assets/images/users/micke.jpg')},
];

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
        data={users}
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