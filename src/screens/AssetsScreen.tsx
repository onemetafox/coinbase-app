import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';
import { EvilIcons } from '@expo/vector-icons'; 
import ChartScreen from './ChartScreen';

export const screenOptions = () => {
  return {
    headerHideShadow: false,
    headerHideBackButton: false,
    headerShown: false
  };
};
const AssetsScreen = () => {
  return (
    <View style={styles.screen}>
      <Header
        leftComponent={{ icon: 'menu', color: '#000', iconStyle: { color: '#000' } }}
        rightComponent={<EvilIcons name="bell" size={30} color="black" />}
        containerStyle={{
          backgroundColor: '#fff',
          justifyContent: 'space-around',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  }
});

export default AssetsScreen;
