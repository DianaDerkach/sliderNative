import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const CustomSlider = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerSlider}>
        <View style={styles.slider}></View>
        <View style={styles.sliderLine}>
          <Text style={styles.sliderLineText}>Swipe to send deposite request</Text>
        </View>
     </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  sliderLine: {
    borderRadius: 5,
    paddingLeft: 100,
    paddingRight: 30,
    paddingVertical: 20,
    backgroundColor: '#f7f6f9',
 },
  slider: {
    position: 'absolute',
    zIndex: 2,
    width: 80,
    height: 60,
    backgroundColor: '#172f5b',
    borderRadius: 10,
  },
  sliderLineText: {
    color: '#bebee1',
    fontSize: 13,
  },
  containerSlider: {
    display: 'flex',
    justifyContent: 'flex-start',
  }
})
