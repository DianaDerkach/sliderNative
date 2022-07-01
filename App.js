import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Main } from "./src/screens/Main";

const App = () => {
  return (
      <Main/>
      );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    justifyContent: 'space-between',
    alignItems: 'center'
    },
});

export default App;
