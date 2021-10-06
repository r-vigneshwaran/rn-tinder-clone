import React from 'react';
import {Text, View, StyleSheet, ImageBackground} from 'react-native';

const App = () => {
  return (
    <View style={styles.PageContainer}>
      <View style={styles.card}>
        <ImageBackground
          source={{
            uri: 'https://images.unsplash.com/photo-1633477240406-706aef553993?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
          }}
          style={styles.image}>
          <View style={styles.cardInner}>
            <Text style={styles.name}>Elon Must</Text>
            <Text style={styles.bio}>
              A dude with a rocket is looking for a gal with fuel
            </Text>
          </View>
        </ImageBackground>
      </View>
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
    width: '90%',
    height: '70%',
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
export default App;
