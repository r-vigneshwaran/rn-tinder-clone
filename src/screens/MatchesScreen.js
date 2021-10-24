import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, FlatList } from 'react-native';
import {data} from '../../assets/data/data'
const MatchesScreen = () => {
  return (
    <SafeAreaView style={styles.root}>
    <View style={styles.title}>
      <Text style={{fontWeight:'bold', fontSize:24,color:'#f63a6e' }}>New Matches</Text>
      <FlatList
        data={data}
        horizontal={true}
        style={styles.userStory}
        showsHorizontalScrollIndicator={false}
        renderItem={({item})=>(
          <View style={styles.user}>
            <Image source={{uri : item.imgUri}} style={styles.image}/>
          </View>
        )}
      />
       <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={({item})=>(
          <View style>
            <View style={styles.user}>
              <Image source={{uri : item.imgUri}} style={styles.image}/>
            </View>
            <Text>{item.name}</Text>
          </View>
        )}
      />
      {/* <View style={styles.users}>
        {data.map((user)=>(
          <View style={styles.user} key={user.id}>
            <Image source={{uri : user.imgUri}} style={styles.image}/>
          </View>
        ))}
      </View> */}
    </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  root:{
    width:'100%',
    flex:1
  },
  title:{
    padding:10,
  },
  user:{
    width:70,
    height:70,
    margin:6,
    borderRadius:50,
    borderWidth:2,
    padding:3,
    borderColor:'#f63a6e',

  },
  image:{
    width:'100%',
    height:'100%',
    borderRadius:250
  },
  users:{
    flexDirection:'row',
    flexWrap:'wrap'
  },
  userStory:{
    height:'auto'
  }
})
export default MatchesScreen
