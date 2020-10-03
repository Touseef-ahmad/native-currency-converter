import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, Linking, StatusBar } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { RowItem, RowSeperator } from '../../components';
import { COLORS } from '../../contants';

const styles = StyleSheet.create({
  safeareapadding: {
    paddingVertical: 50,
    flex: 1,
  },
});
const openURL = (url) => {
  Linking.openURL(url).catch(() => alert('Something went wrong'));
};
export const Options = () => (
  <SafeAreaView style={styles.safeareapadding}>
    <StatusBar barStyle='dark-content' backgroundColor={COLORS.white} />

    <ScrollView>
      <RowItem
        text='Themes'
        rightIcon={<Entypo color={COLORS.blue} name='chevron-right' size={20} />}
        onPress={() => alert('todo!')}
      />
      <RowSeperator />
      <RowItem
        text='React Native Basics'
        rightIcon={<Entypo color={COLORS.blue} name='export' size={20} />}
        onPress={() => openURL('https://reactnative.dev/')}
      />
      <RowSeperator />
      <RowItem
        text='Expo.io'
        rightIcon={<Entypo color={COLORS.blue} name='export' size={20} />}
        onPress={() => openURL('https://expo.io/')}
      />
    </ScrollView>
  </SafeAreaView>
);
