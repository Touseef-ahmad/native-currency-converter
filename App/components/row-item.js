import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { COLORS } from '../contants';

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
    color: COLORS.textColor,
  },
  seperator: {
    backgroundColor: COLORS.borderColor,
    height: StyleSheet.hairlineWidth,
  },
});
export const RowItem = ({ rightIcon, text, onPress }) => (
  <TouchableOpacity style={styles.row} onPress={onPress}>
    <Text style={styles.text}>{text}</Text>
    {rightIcon}
  </TouchableOpacity>
);
export const RowSeperator = () => <View style={styles.seperator} />;
