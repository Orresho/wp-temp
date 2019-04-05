import React from 'react';
import ImageListItem from '../../components/ImageListItem';
import { StyleSheet, View, FlatList } from 'react-native';

const ImageList = ({ users, width, height, columns, onPress}) => {
  return (
    <FlatList
      data={users}
      renderItem={({item}) => (
        <View style={[styles.itemContainer, {width: width}, {height: height}]}>
          <ImageListItem 
            style={[styles.image, {width: width}, {height: height}]} 
            source={item.image}
            onPress={onPress}
            item={item}
          />
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
