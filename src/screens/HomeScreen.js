import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import Card from '../components/card/Card';
import {data} from '../../assets/data/data';
import AnimatedStack from '../components/AnimatedStack'

const HomeScreen = () => {
  const onSwipeLeft=(user)=>{
    console.warn('Swiped Left',user.name)
  }
  const onSwipeRight=(user)=>{
    console.warn('Swiped Right',user.name)
  }
  return (
    <View style={styles.PageContainer}>
      <AnimatedStack
        data={data}
        renderItems={({ item })=> <Card user={item}/>}
        onSwipeLeft={onSwipeLeft}
        onSwipeRight={onSwipeRight}
        />
    </View>
  );
};
const styles = StyleSheet.create({
  PageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width:'100%'
  },
});
export default HomeScreen;
