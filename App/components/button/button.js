import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import { COLORS } from '../../styles';

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonIcon: {
    marginRight: 10,
    width: 20,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 16,
  },
});

export const Button = ({ text, onButtonPress }) => (
  <TouchableOpacity style={styles.button} onPress={onButtonPress}>
    <Image
      style={styles.buttonIcon}
      source={require('../../assets/images/reverse.png')}
      resizeMode='contain'
    />
    <Text style={styles.buttonText}>{text}</Text>
  </TouchableOpacity>
);
