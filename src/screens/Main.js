import React, { useState } from "react";
import {View, StyleSheet, ImageBackground, Dimensions} from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import {ThingsDisplayerComponent} from '../components/ThingsDisplayer/thingsDisplayer.component';
import {ScoreComponent} from '../components/Score/score.component';
import { CharacterContainer } from '../components/Character/character.container';

export const Main = () => {
  const [bias, setBias] = useState(0);

  const onSwipe = (gestureName, gestureState) => {
    const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
    switch (gestureName) {
      case SWIPE_UP:
        setBias( 0);
        break;
      case SWIPE_DOWN:
        console.log('down');
        break;
      case SWIPE_LEFT:
        setBias( -50);
        break;
      case SWIPE_RIGHT:
        setBias(50);
        break;
    }
  };
  return (
    <GestureRecognizer onSwipe={(direction, state) => onSwipe(direction, state)}>
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/img/background.png')}
          style={styles.background}>
          <View style={styles.topContainer}>
            <ScoreComponent />
            <ThingsDisplayerComponent />
          </View>
          <CharacterContainer bias={bias} />
        </ImageBackground>
      </View>
     </GestureRecognizer>
  )};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  background: {
    padding: 30,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  topContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});
