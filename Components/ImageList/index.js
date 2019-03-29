import React from 'react';
import ImageListItem from '../../Components/ImageListItem';
import { StyleSheet, View, FlatList } from 'react-native';

const ImageList = ({ users, width, height, columns, onPress}) => {
  return (
    <FlatList
      style={styles.container}
      data={users}
      renderItem={({item}) => (
        <View style={[styles.itemContainer, {width: width}]}>
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
  container: {
    backgroundColor: '#287dc5',
  }
});

export default ImageList;
