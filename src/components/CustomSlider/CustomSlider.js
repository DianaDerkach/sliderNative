import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { GestureHandlerRootView, PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

const SLIDER_WIDTH = 300;

export const CustomSlider = () => {
  const translateX = useSharedValue(0);

  const panGestureEvent = useAnimatedGestureHandler({
    onStart: (event, context) => {
      context.translateX = translateX.value;
    },
    onActive: (event, context) => {
      translateX.value = event.translationX + context.translateX;
    },
    onEnd: () => {
      const distance = translateX.value;

      if (distance > SLIDER_WIDTH) {
        console.log(distance);
        translateX.value = withSpring(0);
      }
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
    <GestureHandlerRootView>
      <View style={styles.containerSlider}>
        <View style={styles.sliderLine}>
            <PanGestureHandler onGestureEvent={panGestureEvent}>
              <Animated.View style={[styles.slider, rStyle]} />
            </PanGestureHandler>
          <Text style={styles.sliderLineText}>Swipe to send deposite request</Text>
        </View>
      </View>
    </GestureHandlerRootView>
  );
};
const styles = StyleSheet.create({
  sliderLine: {
    display: 'flex',
    justifyContent: 'flex-start',
    borderRadius: 5,
    width: SLIDER_WIDTH,
    backgroundColor: '#f7f6f9',
 },
  sliderLineText: {
    position: 'absolute',
    zIndex: -4,
    width: 200,
    left: 70,
    top: 25,
    color: '#bebee1',
    fontSize: 13,
  },
  containerSlider: {
    display: 'flex',
    justifyContent: 'center',
  },
  slider: {
    width: 80,
    height: 60,
    backgroundColor: '#172f5b',
    borderRadius: 10,
  },
})
