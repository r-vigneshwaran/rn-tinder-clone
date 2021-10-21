/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, StyleSheet, ImageBackground} from 'react-native';

const Card = props => {
  const {imgUri, name, bio} = props.user;
  return (
    <View style={styles.card}>
      <ImageBackground
        source={{
          uri: imgUri,
        }}
        style={styles.image}>
        <View style={styles.cardInner}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.bio}>{bio}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  PageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '100%',
    height: '80%',
    backgroundColor: 'red',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
    elevation:-1
  },
  image: {
    width: '100%',
    height: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  name: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
  },
  bio: {
    fontSize: 18,
    color: '#fff',
    lineHeight: 25,
    fontWeight: 'normal',
  },
  cardInner: {
    padding: 10,
  },
});
export default Card;
