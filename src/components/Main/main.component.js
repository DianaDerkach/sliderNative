import React from "react";
import { Image, Text, View, StyleSheet, ImageBackground } from "react-native";
import { CustomHeader } from "./components/CustomHeader";
import { CategoryCard } from "./components/CategoryCard";

export const MainComponent = () => {
  return (
    <View style={styles.background}>
        <ImageBackground source={require('../../assets/img/headerBackground.png')} imageStyle={styles.borderRadius} style={styles.header} resizeMode={"cover"}>
          <Text style={styles.text}>Choose questions pack to play</Text>
          <Image source={require('../../assets/img/idea.png')} style={styles.image}/>
        </ImageBackground>
      <CategoryCard text='JS questions' img=''/>
      <CategoryCard text='React questions' img=''/>
      <CategoryCard text='Redux questions' img=''/>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#F5F5F5',
  },
  text: {
    fontSize: 21,
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
    color: '#FFF',
    width: 200,
  },
  image: {
    width: 133,
    height: 133,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 184,
  },
  borderRadius: {

    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
  }
})
