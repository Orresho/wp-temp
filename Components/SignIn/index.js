import React from 'react';
import {Modal, Text, View, Button } from 'react-native';
import styles from './styles.css.js';

const SignIn = ({ user, onClose }) => {
  return (
    <Modal>
      <View style={styles.modal}>
        <Text style={styles.text}>
          Hej! {user.value}, Logga in med din personliga kod.
        </Text>
        <Button
          onPress={onClose}
          title="Close"
          color="#fff"
        />
      </View>
    </Modal>
  );
}

export default SignIn;
