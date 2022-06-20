import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const CustomSlider = () => {
  return (
    <View style={styles.sliderLine}>
      <View style={styles.slider}/>

      <Text>Swipe to send deposite request</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  sliderLine: {
   paddingHorizontal: 20,
   paddingVertical: 10,
   borderRadius: 20,
    backgroundColor: 'gray',
 },
  slider: {
    borderRadius: '20px',
    backgroundColor: 'purple',
  },
  sliderLineText: {
    color: 'gray',
    fontSize: '12pt',
  }
})
