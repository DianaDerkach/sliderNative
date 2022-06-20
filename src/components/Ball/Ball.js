import React from "react";
import { GestureDetector } from "react-native-gesture-handler/src/handlers/gestures/GestureDetector";
import { Animated, StyleSheet, View } from "react-native";
import { useAnimatedStyle, useSharedValue, withSpring, withTiming } from "react-native-reanimated";
import { Gesture } from "react-native-gesture-handler";
import { CustomSlider } from "../CustomSlider/CustomSlider";

export const Ball = () => {
  const offset = useSharedValue({ x: 0, y: 0 });
  const start = useSharedValue({ x: 0, y: 0 });
  const popupPosition = useSharedValue({ x: 0, y: 0 });
  const popupAlpha = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: offset.value.x }, { translateY: offset.value.y }],
    };
  });

  const animatedPopupStyles = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: popupPosition.value.x },
        { translateY: popupPosition.value.y },
      ],
      opacity: popupAlpha.value,
    };
  });

  const dragGesture = Gesture.Pan()
    .onStart((_e) => {
      popupAlpha.value = withTiming(0);
    })
    .onUpdate((e) => {
      offset.value = {
        x: e.translationX + start.value.x,
        y: e.translationY + start.value.y,
      };
    })
    .onEnd(() => {
      start.value = {
        x: offset.value.x,
        y: offset.value.y,
      };
    });

  const longPressGesture = Gesture.LongPress().onStart((_event) => {
    popupPosition.value = { x: offset.value.x, y: offset.value.y };
    popupAlpha.value = withTiming(1);
  });

  const composed = Gesture.Race(dragGesture, longPressGesture);

  return (
    <Animated.View>
      <View style={[styles.ball, animatedPopupStyles]} />
      <GestureDetector gesture={composed}>
        <CustomSlider style={animatedPopupStyles} />
      </GestureDetector>
    </Animated.View>
  );
};
const styles = StyleSheet.create({
  ball: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: 'blue',
    alignSelf: 'center',
  },
  pinkBall: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: 'pink',
    alignSelf: 'center',
  },
});
