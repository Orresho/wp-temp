import React, { Component } from 'react';
import {View, LayoutAnimation, StyleSheet, ScrollView } from 'react-native';
import Accordion from '../../Components/Accordion';

export default class FoodSchemeScreen extends Component {
  constructor() {
    super();

    const items = [
      { expanded: true, title: "Vecka 1", body: "Mat" },
      { expanded: false, title: "Vecka 2", body: "Mat" },
      { expanded: false, title: "Vecka 3", body: "Mat" },
      { expanded: false, title: "Vecka 4", body: "Mat" },
      { expanded: false, title: "Vecka 5", body: "Mat" },
      { expanded: false, title: "Vecka 6", body: "Mat" },
      { expanded: false, title: "Vecka 7", body: "Mat" },
      { expanded: false, title: "Vecka 8", body: "Mat" },
      { expanded: false, title: "Vecka 9", body: "Mat" },
      { expanded: false, title: "Vecka 10", body: "Mat" },
    ];
    this.state = {accordionItems: [...items]}
  }
  updateLayout = (index) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const items = this.state.accordionItems.map((item) => {
      const newItem = Object.assign({}, item);
      newItem.expanded = false;
      return newItem;
    });
    items[index].expanded = true;
    this.setState(() => {
      return {
        accordionItems: items
      }
    });
  }
  
  render() {
    console.log(this.state);
    
    return (
      <View style={styles.container}>
        <ScrollView>
          {this.state.accordionItems.map((item, key) =>
            (
              <Accordion key={key} onClickFunction={this.updateLayout.bind(this, key)} item={item} />
            )) 
          }
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingTop: 15,
    backgroundColor: '#287dc5',
  },
});