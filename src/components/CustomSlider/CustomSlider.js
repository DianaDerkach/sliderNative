import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Box } from "../Box/Box";

export const CustomSlider = () => {
  return (
    <View style={styles.containerSlider}>
      <Box/>
      <View style={styles.sliderLine}>
        <Text style={styles.sliderLineText}>Swipe to send deposite request</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  sliderLine: {
    borderRadius: 5,
    paddingLeft: 100,
    paddingRight: 30,
    paddingVertical: 13,
    backgroundColor: '#f7f6f9',
 },
  sliderLineText: {
    color: '#bebee1',
    fontSize: 13,
  },
  containerSlider: {
    display: 'flex',
    position: 'absolute',
    zIndex: 1,
    justifyContent: 'flex-start',
  }
})
