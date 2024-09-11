import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const ProductsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>ProductsScreen</Text>
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
