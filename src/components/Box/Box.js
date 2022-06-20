import React from "react";
import { StyleSheet, View } from "react-native";
import { GestureHandlerRootView, PanGestureHandler } from "react-native-gesture-handler";
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring,  } from "react-native-reanimated";


export const Box = () => {
  const translateX = useSharedValue(0);

  const panGestureEvent = useAnimatedGestureHandler({
    onStart: (event, context) => {
      context.translateX = translateX.value;
    },
    onActive: (event, context) => {
      translateX.value = event.translationX + context.translateX;
    },
    onEnd: () => {
    },
  });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
      ],
    }
  })
  return (
    <GestureHandlerRootView style={{ display: 'flex' }}>
      <View style={styles.container}>
        <PanGestureHandler onGestureEvent={panGestureEvent}>
          <Animated.View style={[styles.box, rStyle]} />
        </PanGestureHandler>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  box: {
    position: 'absolute',
    zIndex: 10,
    width: 80,
    height: 60,
    backgroundColor: '#172f5b',
    borderRadius: 10,
  },
});
