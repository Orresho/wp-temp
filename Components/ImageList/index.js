import React, { Component } from 'react';
import ImageListItem from '../../Components/ImageListItem';
import { StyleSheet, View, FlatList, TouchableOpacity, Alert } from 'react-native';

onPress = (item) => {
  Alert.alert('Hi '+item.value+'! Login with your personal code');
}

const ImageList = ({ users, width, height, columns }) => {
  return (
    <FlatList
      data={users}
      renderItem={({item}) => (
        <View style={[styles.itemContainer, {width: width}, {height: height}]}>
          <TouchableOpacity onPress={() => onPress(item)}>
            <ImageListItem style={[styles.image, {width: width}, {height: height}]} source={item.image} />
          </TouchableOpacity>
        </View>
      )}
      keyExtractor={item => item.id}
      numColumns={columns} 
    />
  );
}
const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#287dc5',
  }
});

export default ImageList;
