import React from 'react';
import { SafeAreaView, Image,ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

const YourApp = () => {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView style={styles.scrollView}>
    <View
        style={{
         flex:5,
          padding: 20
        }}>
        <View style={styles.container} />
        <View style={{ backgroundColor: "red",flex:5,height:1000, }} />
       <View style={styles.viewimage}><Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}/></View>
        <Text style={styles.textarea}>EnterUser Name</Text>
        <TextInput style={styles.input}/>
      </View>
      </ScrollView>
      </SafeAreaView>
     
  );
}

const styles= StyleSheet.create({
tinyLogo:{
  width:50,
  height:50,
  alignItems:'center',
},
viewimage:{
  alignItems:'center',
},
container:{
backgroundColor:"blue",
height:600,
borderColor:'gray',
borderWidth:5,
},
textarea:{
borderColor:"gray",
borderWidth:1,
margin:10,
},
input:{
  borderColor:'grey',
  borderWidth:2,
},
});

export default YourApp;