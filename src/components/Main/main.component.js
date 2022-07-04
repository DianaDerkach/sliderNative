import React from "react";
import { Image, Text, View, StyleSheet, ImageBackground } from "react-native";
import { CategoryCard } from "./components/CategoryCard";

export const MainComponent = () => {
  const lightBlue = require('../../assets/img/categoryBackgrounds/light-blue.png');
  const lightViolet = require('../../assets/img/categoryBackgrounds/light-violet.png');
  const blue = require('../../assets/img/categoryBackgrounds/light-blue.png');
  return (
    <View style={styles.background}>
        <ImageBackground source={require('../../assets/img/headerBackground.png')} imageStyle={styles.borderRadius} style={styles.header} resizeMode={"cover"}>
          <Text style={styles.text}>Choose questions pack to play</Text>
          <Image source={require('../../assets/img/idea.png')} style={styles.image}/>
        </ImageBackground>
      <View style={styles.categories}>
        <CategoryCard text='JS questions' color={'#8EA3E8'} img={lightBlue}/>
        <CategoryCard text='React questions' color={'#A069D7'} img={lightViolet}/>
        <CategoryCard text='Redux questions' color={'#4F95D0'} img={blue}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    height: '100%',
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
  categories: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  borderRadius: {
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
  }
})
