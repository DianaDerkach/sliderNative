import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { CustomSlider } from "./src/components/CustomSlider/CustomSlider";

const App = () => {
  return (
    <View style={styles.container}>
      <CustomSlider/>
    </View>
      );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width:300,
    height: 300,
    justifyContent: 'center',
    alignSelf: 'center'
    },
});

export default App;
