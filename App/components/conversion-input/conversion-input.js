import React from 'react';
import { View, TouchableOpacity, Text, TextInput, StyleSheet } from 'react-native';

import { COLORS } from '../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    marginVertical: 10,
    marginHorizontal: 20,
    flexDirection: 'row',
    borderRadius: 5,
  },
  disabledContainer: {
    backgroundColor: COLORS.offWhite,
  },
  button: {
    padding: 15,
    borderRightColor: COLORS.borderColor,
    borderRightWidth: 1,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: COLORS.blue,
    fontWeight: 'bold',
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 16,
    color: COLORS.textLight,
  },
});

export const ConversionInput = ({ text, onButtonPress, ...props }) => {
  const containerStyles = [styles.container];
  if (props.editable === false) {
    containerStyles.push(styles.disabledContainer);
  }
  return (
    <View style={containerStyles}>
      <TouchableOpacity style={styles.button} onPress={onButtonPress}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
      <TextInput style={styles.input} {...props} />
    </View>
  );
};
