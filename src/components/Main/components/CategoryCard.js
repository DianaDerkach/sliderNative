import React from "react";
import { ImageBackground, Text, View, StyleSheet } from "react-native";

export const CategoryCard = ({text, color, img}) => {
  return (
    <ImageBackground style={styles.container} source={img} imageStyle={styles.borderRadius}>
      <Text style={styles.title}>{text}</Text>
      <View style={[styles.button]}>
        <Text style={[styles.buttonText, { color: color }]}>Start</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 96,
    width: 340,
    paddingHorizontal: 32,
    marginTop: 20,
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#FFF',
    width: 58,
    height: 20,
  },
  buttonText: {
    fontSize: 10,
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 16,
    color: '#FFF',
  },
  borderRadius: {
    borderRadius: 10,
  }
});
