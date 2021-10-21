import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Pressable,
  Text,
  useWindowDimensions,
  Image
} from 'react-native';
import Card from './src/components/card/Card';
import {data} from './assets/data/data';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  useAnimatedGestureHandler,
  useDerivedValue,
  interpolate,
  runOnJS,
} from 'react-native-reanimated';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Like from './assets/images/LIKE.png'
import Nope from './assets/images/nope.png'
const ROTATION = 60;
const SWIPE_VELOCITY = 1000;

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(currentIndex + 1);
  const [isLeft, setIsLeft] = useState(false);
  const currentProfile = data[currentIndex];
  const nextProfile = data[nextIndex];
  /*Animation work starts here*/
  const {width} = useWindowDimensions();
  const outOfScreen = width * 2;
  const translateX = useSharedValue(0); // -width 0 +width
  const rotate = useDerivedValue(
    () =>
      interpolate(translateX.value, [0, outOfScreen], [0, ROTATION]) + 'deg',
  ); // -60deg 0deg +60deg

  const cardStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateX.value,
      },
      {
        rotate: rotate.value,
      },
      {
        scale: interpolate(
          translateX.value,
          [-outOfScreen, 0, outOfScreen],
          [0.7, 1, 0.7],
        ),
      },
    ],
    opacity: interpolate(
      translateX.value,
      [-outOfScreen, 0, outOfScreen],
      [0, 1, 0],
    ),
  }));
  const nextCardStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: interpolate(
          translateX.value,
          [-outOfScreen, 0, outOfScreen],
          [1, 0.9, 1],
        ),
      },
    ],
    opacity: interpolate(
      translateX.value,
      [-outOfScreen, 0, outOfScreen],
      [1, 0.7, 1],
    ),
  }));
  const LikeStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      translateX.value,
      [0, outOfScreen/10],
      [0, 1],
    ),
  }));
  const NopeStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      translateX.value,
      [-outOfScreen/10, 0],
      [1, 0],
    ),
  }));
  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startX = translateX.value;
    },
    onActive: (event, ctx) => {
      translateX.value = ctx.startX + event.translationX;
    },
    onEnd: (event, ctx) => {
      if (Math.abs(event.velocityX) < SWIPE_VELOCITY) {
        translateX.value = withSpring(0);
      } else {
        if(event.velocityX < 0){
        translateX.value = withSpring(
          outOfScreen * Math.sign(event.velocityX),
          {},
          // () => runOnJS(setCurrentIndex)(currentIndex + 1),
        );
        runOnJS(setCurrentIndex)(currentIndex + 1)
        }else{
        translateX.value = withSpring(
          outOfScreen * Math.sign(event.velocityX),
          {},
          // () => runOnJS(setCurrentIndex)(currentIndex + 1),
        );
        runOnJS(setCurrentIndex)(currentIndex + 1)
        }
      }
    },
  });
  /*Animation work ends here*/
  useEffect(() => {
    translateX.value = 0;
    setNextIndex(currentIndex + 1);
  }, [currentIndex, translateX]);
  return (
    <View style={styles.PageContainer}>
      {nextProfile && (
        <View style={styles.nextCardContainer}>
          <Animated.View style={[styles.nextCardStyles, nextCardStyle]}>
            <Card user={nextProfile} />
          </Animated.View>
        </View>
      )}
      {currentProfile && (
        <PanGestureHandler onGestureEvent={gestureHandler}>
          <Animated.View style={[styles.animatedCard, cardStyle]}>
              <Animated.Image source={Like} style={[styles.Like,{left:10},LikeStyle]} resizeMode="contain"/>
              <Animated.Image source={Nope} style={[styles.Like,{right:10},NopeStyle]} resizeMode="contain"/>
            <Card user={currentProfile} />
          </Animated.View>
        </PanGestureHandler>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  PageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animatedCard: {
    width: '90%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position:'relative'
  },
  nextCardContainer: {
    width: '90%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex:-1
  },
  nextCardStyles: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Like:{
    width:150,
    height:150,
    position:'absolute',
    top:100,
    zIndex:999,

  }
});
export default App;
