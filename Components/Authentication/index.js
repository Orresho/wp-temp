import React, { Component } from 'react';
import {Modal, TextInput, View, TouchableOpacity, Text, Alert } from 'react-native';
import styles from './styles.css.js';

export default class Authentication extends Component {
  state = {
    codeValue: null,
    authenticated: false,
  }
  validateCode = (user, code) => {
    if (user.code === code) {
      this.setState({ authenticated: true })
      Alert.alert('Hi '+user.value+'! You are now logged in');
    }
    else {
      this.setState({ authenticated: false })
      Alert.alert('Wrong code, try again');
    }
  }
  render() {
    const { user, onClose } = this.props;
    return (
      <Modal>
        <View style={styles.modal}>
          <TouchableOpacity
            style={styles.close}
            onPress={onClose}>
            <Text style={styles.buttonText}>X</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({codeValue: text})}
          />
          <TouchableOpacity
            onPress={() => this.validateCode(user, this.state.codeValue)}>
            <Text style={styles.buttonText}>Verify</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    )
  }
};