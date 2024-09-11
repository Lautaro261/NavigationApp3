import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const Tab1Screen = () => {
  return (
    <View style={styles.container}>
      <Text>Tab1Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
