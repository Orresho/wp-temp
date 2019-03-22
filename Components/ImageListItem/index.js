import React, { Component } from 'react';
import { Animated, TouchableOpacity } from 'react-native';

export default class ImageListItem extends Component {
  state = {
    opacity: new Animated.Value(0),
  }
  onLoad = () => {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }
  render() {
    return (
      <TouchableOpacity onPress={() => this.props.onPress(this.props.item)}>
        <Animated.Image
          {...this.props}
          onLoad={this.onLoad}
          style={[
            {
              opacity: this.state.opacity,
              transform: [
                {
                  scale: this.state.opacity.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.95, 1],
                  })
                }
              ]
            },
            this.props.style,
          ]}
        />
      </TouchableOpacity>
    )
  }
};