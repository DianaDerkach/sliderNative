// React Native Counter Example using Hooks!

import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { CustomSlider } from "./src/components/CustomSlider/CustomSlider";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <CustomSlider/>
    </GestureHandlerRootView>
  );
};

// React Native Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default App;
