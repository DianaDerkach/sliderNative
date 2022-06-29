import React, { useReducer } from "react";
import {View, StyleSheet, ImageBackground, Dimensions} from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import {ThingsScreenComponent} from '../components/ThingsScreen/thingsScreen.component';
import {ScoreComponent} from '../components/Score/score.component';
import { CharacterContainer } from '../components/Character/character.container';
import { scoreReducer } from "../reducers/scoreReducer";
import { characterReducer } from "../reducers/characterReducer";
import { combineReducers, initialState } from "../reducers/combineReducers";
import { swipeLeft, swipeRight, swipeUp } from "../components/actions/swipeActions";

export const Main = () => {

  const [data, dispatch] = useReducer(combineReducers({ characterReducer, scoreReducer }), initialState);

  return (

    <GestureRecognizer
      onSwipeLeft={() => dispatch(swipeLeft())}
      onSwipeRight={() => dispatch(swipeRight())}
      onSwipeUp={() => dispatch(swipeUp())}
    >
       <View style={styles.container}>
        <ImageBackground
          source={require('../assets/img/background.png')}
          style={styles.background}>
          <View style={styles.topContainer}>
            <ScoreComponent score={data.score} />
            <ThingsScreenComponent />
          </View>
           <CharacterContainer bias={data.character.bias} />
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
