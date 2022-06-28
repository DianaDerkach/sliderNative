import { swipeDirections } from "react-native-swipe-gestures";

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
