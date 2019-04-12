import React from "react";
import { FlatList, View } from "react-native";
import ListItem from './NavigationListItem';

const NavigationList = ({ data, onNavigate }) => {
  return (
    <FlatList 
      data={data}
      renderItem={({item, index}) => (
        <ListItem 
          item={item}
          onPressItem={() => onNavigate(item.screen)}
        />
      )}
    />
  );
}

export default NavigationList;