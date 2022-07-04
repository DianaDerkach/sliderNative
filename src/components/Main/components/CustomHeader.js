import React from "react";
import { Image, ImageBackground, StyleSheet, Text } from "react-native";

export const CustomHeader = () => {
  return (
    <ImageBackground source={require('../../../assets/img/headerBackground.png')} imageStyle={styles.borderRadius} style={styles.header} >

    </ImageBackground>
  );
};

const styles = StyleSheet.create({

})
