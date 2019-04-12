import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default class Accordion extends Component {
  constructor() {
    super();
    this.state = {
      height: 0,
    }
  }
  componentWillReceiveProps(updateProps) {
    if (updateProps.item.expanded) {
      this.setState(() => {
        return {
          height: null,
        }
      });
    }
    else {
      this.setState(() => {
        return {
          height: 0,
        }
      });
    }
    console.log(this.state);
  }
  shouldComponentUpdate (updateProps, nextState) {
    if (updateProps.item.expanded !== this.props.item.expanded) {
      return true;
    }
    return false;
  }
  render() {
    console.log(this.state);
    
    return(
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={0.7} onPress={this.props.onClickFunction} style={styles.button}>
          <Text style={styles.buttonText}>{this.props.item.title} </Text>
        </TouchableOpacity>
        <View style={{ height: this.state.height, overflow: 'hidden' }}>
          <Text style={styles.content}>
            {this.props.item.body}
          </Text>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    width:'100%',
    borderBottomColor: '#3490de',
    borderBottomWidth: 1,
  },
  button: {
    padding: 30,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 21
  },
  content: {
    fontSize: 18,
    color: '#fff',
    padding: 10
  }
});