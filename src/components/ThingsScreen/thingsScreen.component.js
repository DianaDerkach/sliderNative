import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';

export const ThingsScreenComponent = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/img/food/apple.png')}
        style={styles.image}
      />
      <Text>apple</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: 200,
    height: 100,
    backgroundColor: '#ded7c9',
  },
  image: {
    width: 70,
    height: 70,
  },
});
