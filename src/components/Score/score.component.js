import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export const ScoreComponent = () => {
  return <Text style={styles.score}>30</Text>;
};

const styles = StyleSheet.create({
  score: {
    fontSize: 45,
    fontWeight: 'bold',
    marginBottom: 15,
  },
});
